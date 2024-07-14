import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export default function Home() {
  return (
    <div className="text-2xl">
      hello world
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 lg:gap-x-0 sm:pb-32 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
        <div></div>
      </MaxWidthWrapper>
    </div>
  );
}
