import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {};

function DomainInput({}: Props) {
  return <div className="flex flex-col gap-4  items-start justify-center border border-white w-full max-w-[576px] p-10 m-10 rounded-xl">
    <h3>Enter URL</h3>
    <Input
    placeholder="example.com"
    />
    <Button variant={"ghost"} type="submit" className="border border-white">
      Submit
    </Button>
  </div>;
}

export default DomainInput;
