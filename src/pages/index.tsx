import Head from "next/head";
import { Hero, Modal, Navbar, Row, SubscriptionPlan } from "@/components";
import { API_REQUEST } from "@/services/api.services";
import { GetServerSideProps } from "next";
import { IMovie, Products } from "@/interfaces/app.interface";
import { useInfoStore } from "@/store";

export default function Home({
  trending,
  top_rated,
  tv_top_rated,
  movie_popular,
  documentary,
  comedy,
  action,
  history,
  family,
  products,
  subscription
}: HomeProps): JSX.Element {
  const { modal } = useInfoStore();

console.log(products);


  if(!subscription.length) return <SubscriptionPlan products={products}/>



  return (
    <div className={`realtive min-h-screen ${modal&& '!h-screen overflow-hidden'}`}>
      <Head>
        <title>Home - Sammi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Animate.svg" />
      </Head>
      <Navbar />
      <main className="relative pl-4 lg:pl-16 lg:space-y-24">
        <Hero trending={trending} />
        <section>
          <Row title="Top Rated" movies={top_rated} />
          <Row title="TV Shows" movies={tv_top_rated} isBig={true} />
          <Row title="Popular" movies={movie_popular} />
          <Row title="Popular" movies={documentary} />
          <Row title="Action" movies={action} />
          <Row title="History" movies={history} />
          <Row title="Comedy" movies={comedy} />
          <Row title="Family" movies={family} />
        </section>
      </main>
      {modal && <Modal />}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({req}) => {

  const user_id = req.cookies.user_id

  if(!user_id){
    return {
      redirect: {destination:'/auth', permanent:false}
    }
  }

  const [
    trending,
    top_rated,
    tv_top_rated,
    movie_popular,
    documentary,
    action,
    family,
    history,
    comedy,
    products,
    subscription
  ] = await Promise.all(
    [
      fetch(API_REQUEST.trending).then((res) => res.json()),
      fetch(API_REQUEST.top_rated).then((res) => res.json()),
      fetch(API_REQUEST.tv_top_rated).then((res) =>res.json()),
      fetch(API_REQUEST.movie_popular).then((res) =>res.json()),
      fetch(API_REQUEST.documnetary).then((res) =>res.json()),
      fetch(API_REQUEST.action).then((res) => res.json()),
      fetch(API_REQUEST.family).then((res) => res.json()),
      fetch(API_REQUEST.history).then((res) => res.json()),
      fetch(API_REQUEST.comedy).then((res) => res.json()),
      fetch(API_REQUEST.products_list).then((res) => res.json()),
      fetch(`${API_REQUEST.subscription}/${user_id}`).then((res) => res.json())


    ]
  );

  return {
    props: {
      trending: trending.results,
      top_rated: top_rated.results,
      tv_top_rated: tv_top_rated.results,
      movie_popular: movie_popular.results,

      documentary: documentary.results,
      action: action.results,
      comedy: comedy.results,
      family: family.results,
      history: history.results,
      products:products.products.data,
      subscription:subscription.subscription.data
    },
  };
};

interface HomeProps {
  trending: IMovie[];
  top_rated: IMovie[];
  tv_top_rated: IMovie[];
  movie_popular: IMovie[];
  documentary: IMovie[];
  action: IMovie[];
  family: IMovie[];
  history: IMovie[];
  comedy: IMovie[];
  products: Products[];
  subscription: string;
}
