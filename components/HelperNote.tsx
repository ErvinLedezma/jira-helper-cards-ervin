import { HelperNoteProps } from "@/types/helperNote.types";
import {
  formatedDateToYYYYMMDD,
  viewLastUpdated,
} from "@/utils/uploadDate.utils";
import Image from "next/image";

export default function HelperNote({
  indexCard,
  code,
  title,
  description,
  uploadDate,
  updatedDate,
  state,
}: HelperNoteProps) {
  return (
    <div className="w-full max-w-80 overflow-hidden rounded-xl">
      <div
        className={[
          "w-full py-4 px-2 text-white font-medium flex justify-between",
          state === "active" && "bg-red-500",
          state === "future" && "bg-purple-500",
          state === "completed" && "bg-gray-500",
        ].join(" ")}
      >
        <div className="flex gap-2 items-center">
          <span className="px-3 py-1 border border-white rounded-full">
            {indexCard}
          </span>
          <h2>{title}</h2>
        </div>
        <div className="flex gap-2 items-center">
          <h3>{code}</h3>
          <Image src="/jira-logo.png" alt="jira-logo" width={28} height={28} />
        </div>
      </div>

      <div className="bg-white py-4 px-2 space-y-3 text-black">
        <p>{description}</p>

        <div className="w-full h-px bg-gray-300"></div>

        <div className="flex justify-between items-center text-gray-800">
          <p>{viewLastUpdated(updatedDate)}</p>
          <p>{formatedDateToYYYYMMDD(uploadDate)}</p>
        </div>
      </div>
    </div>
  );
}
