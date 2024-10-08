use actix_cors::Cors;
use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use rustls::{ClientConfig, OwnedTrustAnchor, RootCertStore};
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use tokio::net::TcpStream;
use tokio_rustls::{rustls::ServerName, TlsConnector};
use x509_parser::extensions::GeneralName;
use x509_parser::oid_registry::*;
use x509_parser::prelude::*;

#[derive(Deserialize)]
struct DomainRequest {
    domain: String,
}

#[derive(Serialize)]
struct CertificateResponse {
    validity: bool,
    expiration_date: String,
    issuer: String,
    subject: String,
    is_valid_for_domain: bool,
    // additional
    ca_valid: bool,
    self_signed: bool,
    revocation_status: String,
}

async fn check_ssl(domain_req: web::Json<DomainRequest>) -> impl Responder {
    let domain = &domain_req.domain;

    match fetch_ssl_certificate(domain).await {
        Ok(cert_info) => HttpResponse::Ok().json(cert_info),
        Err(_) => HttpResponse::BadRequest().body("Invalid domain or SSL check failed."),
    }
}

async fn fetch_ssl_certificate(domain: &str) -> Result<CertificateResponse, &'static str> {}
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(
                Cors::default()
                    .allow_any_origin()
                    .allow_any_method()
                    .allow_any_header()
                    .supports_credentials(),
            )
            .route("/ssl", web::post().to(check_ssl))
    })
    .bind("127.0.0.1:8000")?
    .run()
    .await
}
