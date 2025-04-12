"use client";

import Document from "@/components/Document";

const DocumentPageClient = ({ id }: { id: string }) => {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Document id={id} />
    </div>
  );
};

export default DocumentPageClient;
