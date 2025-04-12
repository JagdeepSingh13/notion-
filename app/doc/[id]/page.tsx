import DocumentPageClient from "./page1";

const DocumentPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params; // Resolve the params Promise

  return <DocumentPageClient id={id} />;
};

export default DocumentPage;
