"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { api } from "@/trpc/react";
import { LoaderCircle } from "lucide-react";
import DisplaySSLResult from "./DisplaySSLResult";
import { validateDomain } from "@/lib/utils";

type Props = {};

function DomainInput({}: Props) {
  const [domain, setDomain] = useState("");
  // const [latestDomainCheck, setLatestDomainCheck] = useState<>()
  const [latestDomainCheck] = api.sslCheck.getLatestSSLCheck.useSuspenseQuery();
  const utils = api.useUtils();
  const sslCheck = api.sslCheck.checker.useMutation({
    onSuccess: async () => {
      await utils.sslCheck.invalidate();
      localStorage.setItem("domain", domain);
      setDomain("");
    },
  });
  // useEffect(() => {

  // }, [sslCheck])
  // console.log(validateDomain(domain));

  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const cleanedInput = validateDomain(domain);
          sslCheck.mutate({ domain: cleanedInput });
        }}
        className="flex flex-col gap-4  items-start justify-center border border-white w-full max-w-[576px] p-10 m-10 rounded-xl"
      >
        <h3>Enter URL</h3>
        <Input
          placeholder="example.com"
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-white"
          required={true}
        />

        <Button
          variant={"ghost"}
          type="submit"
          className="border border-white"
          disabled={sslCheck.isPending}
        >
          {sslCheck.isPending ? (
            <span className="flex gap-2 items-center justify-center">
              Checking <LoaderCircle className="animate-spin h-4 w-4" />
            </span>
          ) : (
            "Check"
          )}
        </Button>
      </form>
      {latestDomainCheck ? (
        <DisplaySSLResult
          sslCheckResponse={latestDomainCheck}
          domain={localStorage.getItem("domain") ?? ""}
        />
      ) : (
        <p>You have no posts yet.</p>
      )}
    </div>
  );
}

export default DomainInput;
