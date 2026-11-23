import { Suspense } from "react";
import { notFound } from "next/navigation";

import { getProductBySlug } from "@/lib/commerce/product-detail";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function MagentoProductDetailPage({ params }: ProductPageProps) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Magento Product Detail</h1>

      <Suspense fallback={<p className="mt-4">Loading products...</p>}>
        <ProductDetailContent params={params} />
      </Suspense>
    </main>
  );
}

async function ProductDetailContent({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <p className="mt-2 text-sm text-gray-500">Product: {product.name}</p>

      <pre className="mt-6 overflow-auto rounded-lg p-4 text-sm">
        {JSON.stringify(product, null, 2)}
      </pre>
    </>
  );
}
