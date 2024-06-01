import SearchMain from "@/components/molecules/SearchMain";

export default async function Home() {
  return (
    <main className="home flex-1 flex flex-col justify-center items-center">
      <div className="px-8 md:w-3/5 xl:w-2/5 mb-10 md:mb-16">
        <div className="home__text mb-10 text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Italia Remote
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Find companies hiring Italian talents in a remote fashion. Based on
            the open-source repository ”awesome-italia-remote”.
          </p>
        </div>
        <div className="home__search">
          <SearchMain />
        </div>
      </div>
    </main>
  );
}
