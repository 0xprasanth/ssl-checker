import { SSLCheck } from "@/server/api/routers/sslCheck";
import React from "react";
import { compareAsc, format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";

type Props = {
  sslCheckResponse: SSLCheck;
  domain: string;
};

function DisplaySSLResult({
  sslCheckResponse: {
    ca_valid,
    expiration_date,
    is_valid_for_domain,
    issuer,
    revocation_status,
    self_signed,
    subject,
    validity,
  },
  domain,
}: Props) {
  return (
    <Card className="max-w-[756px] w-full">
      <CardHeader>
        <CardTitle>Certificate information for {domain}</CardTitle>
        {/* <CardDescription></CardDescription> */}
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-between w-full ">
        <div className="w-full grid grid-cols-2  place-content-evenly gap-10  p-2 border-b border-muted-foreground">
          <h4 className="text-purple-700 text-xl">Validity Status</h4>
          {validity ? (
            <span className="text-green-500 place-self-end">Valid</span>
          ) : (
            <span className="text-red-500 place-self-end">Invalid</span>
          )}
        </div>

        <div className="w-full grid grid-cols-2  gap-10 p-2  border-b border-muted-foreground">
          <h4 className="text-purple-700 text-xl">Subject</h4>
          <span className="place-self-end">{subject}</span>
        </div>
        <div className="w-full grid grid-cols-2 gap-10 p-2  border-b border-muted-foreground">
          <h4 className="text-purple-700 text-xl">Expiration Date</h4>
          <span className="place-self-end">
            {format(expiration_date, "EEEE HH:MM:SS yyyy-MM-dd")}
          </span>
        </div>

        <div className="w-full grid grid-cols-2 gap-10 p-2  border-b border-muted-foreground">
          <h4 className="text-purple-700 text-xl">Issuer</h4>
          <span className="place-self-end ">{issuer}</span>
        </div>

        <div className="w-full grid grid-cols-2 gap-10 p-2  border-b border-muted-foreground">
          <h4 className="text-purple-700 text-xl">Valid for Domain</h4>
          {is_valid_for_domain ? (
            <span className="text-green-500 place-self-end">Valid</span>
          ) : (
            <span className="text-red-500 place-self-end">Invalid</span>
          )}
        </div>
        <div className="w-full grid grid-cols-2 gap-10 p-2  border-b border-muted-foreground">
          <h4 className="text-purple-700 text-xl"> Self Signed</h4>
          {self_signed ? (
            <span className="text-green-500 place-self-end">Valid</span>
          ) : (
            <span className="text-red-500 place-self-end">Invalid</span>
          )}
        </div>

        <div className="w-full grid grid-cols-2 gap-10 p-2  border-b border-muted-foreground">
          <h4 className="text-purple-700 text-xl">CA Validity</h4>
          {ca_valid ? (
            <span className="text-green-500 place-self-end">Valid</span>
          ) : (
            <span className="text-red-500 place-self-end">Invalid</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default DisplaySSLResult;
