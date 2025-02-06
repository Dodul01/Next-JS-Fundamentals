const DynamicProductPage = async ({ params, searchParams }) => {
  const productId = await params;
  const searchParam = await searchParams;
  console.log(productId);
  console.log(searchParam);

  return <div>This is Dynamic Product Page</div>;
};

export default DynamicProductPage;
