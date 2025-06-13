export type HelperNoteProps = {
  indexCard?: number;
  code: string;
  title: string;
  description: string;
  uploadDate: Date;
  updatedDate: Date;
  state: "active" | "future" | "completed";
};