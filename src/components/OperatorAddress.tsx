import Image from "next/image";
import { assetPath } from "@/lib/paths";

function OperatorAddress() {
  return (
    <address className="not-italic">
      <Image
        src={assetPath("/operator.png")}
        alt="Website operator's name and postal address"
        width={260}
        height={112}
        className="h-auto max-w-full"
      />
    </address>
  );
}

export { OperatorAddress };
