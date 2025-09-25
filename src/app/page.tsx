import { StoryblokComponent } from "@storyblok/react";

export default function Home({ blok }) {
  return (
    <>
         <section>
            {blok.body
            ? blok.body.map((blok) => (
                <StoryblokComponent blok={blok} key={blok._uid} />
                ))
            : null}
        </section>
    </>
  );
}
