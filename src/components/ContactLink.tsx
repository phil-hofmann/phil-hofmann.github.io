"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getContactUrl } from "@/data/contact";
import { assetPath } from "@/lib/paths";

export function ContactLink() {
  const [href, setHref] = useState(assetPath("/imprint/"));

  useEffect(() => {
    setHref(getContactUrl());
  }, []);

  return (
    <Button className="w-auto shrink-0 text-foreground" asChild>
      <a href={href}>Let&apos;s Talk</a>
    </Button>
  );
}
