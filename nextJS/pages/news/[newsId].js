import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  //fetch data

  return <h1>Details Page</h1>;
}

export default DetailsPage;
