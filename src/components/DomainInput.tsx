"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { api } from "@/trpc/react";
import { LoaderCircle } from "lucide-react";
import DisplaySSLResult from "./DisplaySSLResult";
import { validateDomain } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { SSLCheck } from "@/server/api/routers/sslCheck";
import { env } from "@/env";
import { useMutation } from "@tanstack/react-query";
import { ToastAction } from "./ui/toast";

type Props = {};

async function sslCheck(domain: string) {
  const resp = await axios.post<SSLCheck>(
    `${env.NEXT_PUBLIC_BACKEND_API}/ssl`,
    {
      domain: domain,
    }
  );

  return resp.data;
}

function DomainInput({}: Props) {
  const targetDivRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [domain, setDomain] = useState("");

  const { toast } = useToast();

  const mutation = useMutation({
    mutationKey: ["sslcheck"],
    mutationFn: (domain: string) => sslCheck(domain),
    onSuccess: () => {
      localStorage.setItem("domain", domain);

      setDomain("");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (domain.length <= 0) {
      inputRef.current?.focus();
      toast({
        title: "Oh no! You forget something important",
        description: `Enter domain name to verify the SSL certificate`,
        variant: "destructive",
      });
      return;
    }
    try {
      const cleanedInput = validateDomain(domain);
      mutation.mutate(cleanedInput);
      if (mutation.isError) {
        toast({
          title: "Uh oh! Something went wrong.",
          description: `There was a problem with your request. reason: ${mutation.error}`,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
          variant: "destructive",
        });
      }
      if (mutation.isSuccess) {
        toast({
          title: "Success",
          description: `Results fetch Successfully`,
        });
        handleSuccessEvent();
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Uh oh! Something went wrong.",
          description: `Error: ${error.message}`,
          variant: "destructive",
        });
      }
    }
  };

  const handleSuccessEvent = () => {
    // Simulate a success event, like form submission
    console.log("Success event triggered!");

    // Scroll to the target div
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // You can adjust this to 'center', 'end', or 'nearest'
      });
    }
  };
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-4  items-start justify-center border border-white w-full max-w-[576px] p-10 m-10 rounded-xl"
      >
        <h3>Enter URL</h3>
        <Input
          placeholder="example.com"
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-white"
          ref={inputRef}
        />

        <Button
          variant={"ghost"}
          type="submit"
          className="border border-white"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? (
            <span className="flex gap-2 items-center justify-center">
              Checking <LoaderCircle className="animate-spin h-4 w-4" />
            </span>
          ) : (
            "Check"
          )}
        </Button>
      </form>
      {mutation.data ? (
        <div id="result-section" ref={targetDivRef}>
          <DisplaySSLResult
            sslCheckResponse={mutation.data}
            domain={localStorage.getItem("domain") ?? ""}
          />
        </div>
      ) : (
        <p>Enter domain or host name to start 😀 </p>
      )}
    </div>
  );
}

export default DomainInput;
