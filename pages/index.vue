<template>
  <div>
    <header>
      <!-- Hero image -->
      <div
        class="flex pb-10 overflow-hidden bg-gradient-to-br from-a-violet-500 to-a-purple-500"
      >
        <picture
          class="w-full h-auto m-auto transition-transform duration-500 ease-in-out delay-500 transform sm:max-w-screen-sm hover:scale-125"
        >
          <img
            id="logo"
            height="1024"
            width="1024"
            src="https://cdn.statically.io/img/raw.githubusercontent.com/h=1024,w=1024,q=90/AlejandroAkbal/brand/main/src/assets/Logo_transparent.png"
            alt="Alejandro Akbal Logo"
          />
        </picture>
      </div>

      <!-- Navbar -->
      <nav
        class="p-4 bg-black -mt-14 bg-opacity-80"
        style="backdrop-filter: blur(2px)"
      >
        <ul class="flex justify-around container__inner">
          <li>
            <a class="text-lg link focus:focus-util" href="#about_me"
              >About me</a
            >
          </li>

          <li>
            <a class="text-lg link focus:focus-util" href="#projects"
              >Projects</a
            >
          </li>

          <li>
            <a class="text-lg link focus:focus-util" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>

    <Spacer />

    <main>
      <!-- About me -->
      <section id="about_me" class="container__outer">
        <div class="container__inner">
          <div>
            <h1 class="text-xl font-medium leading-6 text-gray-200">
              I'm Alejandro Akbal
            </h1>

            <h2 class="mb-1 text-lg text-gray-300">
              A software engineer based on Spain.
              <i class="text-sm">UTC+1</i>
            </h2>

            <p class="text-gray-300">I have many passions…</p>

            <ul class="my-1 space-x-2 text-gray-300">
              <li class="mx-2">
                I like to write
                <a
                  class="link focus:focus-util"
                  href="https://redirect.akbal.dev/blog"
                  target="_blank"
                  rel="noopener"
                >
                  articles
                </a>
              </li>

              <li>
                Tinker with
                <a
                  class="link focus:focus-util"
                  href="https://redirect.akbal.dev/github"
                  target="_blank"
                  rel="noopener"
                >
                  open-source
                </a>
              </li>

              <li>
                Create
                <a
                  class="link focus:focus-util"
                  href="https://github.com/AlejandroAkbal/Designs"
                >
                  designs and mock-ups
                </a>
              </li>

              <li>Delve into accessibility concerns</li>

              <li>Manage servers</li>
            </ul>

            <p class="text-gray-300">
              And much more that I do in my every day.
            </p>

            <div class="mt-4">
              <p class="text-center text-gray-200">Find me on</p>

              <ul class="flex flex-wrap justify-center gap-4 mt-4">
                <!-- Blog -->
                <SocialIcon title="Blog" href="https://redirect.akbal.dev/blog">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </SocialIcon>

                <!-- GitHub -->
                <SocialIcon
                  title="GitHub"
                  href="https://redirect.akbal.dev/github"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path>
                </SocialIcon>

                <!-- Twitter -->
                <SocialIcon
                  title="Twitter"
                  href="https://redirect.akbal.dev/twitter"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  ></path>
                </SocialIcon>

                <!-- LinkedIn -->
                <SocialIcon
                  title="LinkedIn"
                  href="https://redirect.akbal.dev/linkedin"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  ></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </SocialIcon>
              </ul>
            </div>

            <!-- Icons to my Github, Twitter and Blog -->
          </div>
        </div>
      </section>

      <Spacer />

      <!-- Projects -->
      <section id="projects" class="container__outer">
        <div class="container__inner">
          <h2 class="text-lg font-medium leading-6 text-gray-200">Projects</h2>
          <p class="mt-1 text-sm text-gray-400">
            Some of the work that I am proud of.
          </p>
        </div>

        <div class="mt-4">
          <ul
            class="flex justify-start gap-4 overflow-x-auto sm:no-snap snap snap-x snap-proximity"
            dir="ltr"
          >
            <ProjectCard
              title="Rule 34 App"
              description="A NSFW Progressive Web Application with more than 2500 daily users."
              img-src="/images/projects/r34-app.png"
              :img-width="1600"
              :img-height="1600"
              visit-link-href="https://r34.app/?domain=safebooru.org"
              read-more-link-href="/projects/r34-app"
            />

            <ProjectCard
              title="Rule 34 API"
              description="The API that powers the Rule 34 App."
              img-src="/images/projects/api-r34-app.png"
              :img-width="1280"
              :img-height="1280"
              visit-link-href="https://redirect.r34.app/github/api"
              read-more-link-href="/projects/api-r34-app"
            />

            <ProjectCard
              title="Furry Kingdom"
              description="Commercial project for a community based website."
              img-src="/images/projects/furrykingdom-xyz.png"
              :img-width="1280"
              :img-height="1280"
              visit-link-href="https://furrykingdom.netlify.app"
              read-more-link-href="/projects/furrykingdom-xyz"
            />

            <ProjectCard
              title="Torrent Mxchine"
              description="Commercial project for a torrent based website."
              img-src="/images/projects/torrent-mx.png"
              :img-width="1280"
              :img-height="1280"
              visit-link-href="https://alejandroakbal.github.io/Torrent.mx"
              read-more-link-href="/projects/torrent-mx"
            />

            <ProjectCard
              title="AnimeBoxes Tag Backup Generator"
              description="Simple web application for modifying backup data."
              img-src="/images/projects/animeboxes-tag-backup-generator.png"
              :img-width="1280"
              :img-height="1280"
              visit-link-href="https://alejandroakbal.github.io/AnimeBoxes-Tag-Backup-Generator"
              read-more-link-href="/projects/animeboxes-tag-backup-generator"
            />

            <ProjectCard
              title="Web portfolio"
              description="The past version of this website."
              img-src="/images/projects/akbal-dev.png"
              :img-width="1280"
              :img-height="1280"
              visit-link-href="https://old2.akbal.dev"
              read-more-link-href="/projects/old2-akbal-dev"
            />

            <ProjectCard
              title="My first website"
              description="My very first website. Kept as a memory."
              img-src="/images/projects/old-akbal-dev.png"
              :img-width="1280"
              :img-height="1280"
              visit-link-href="https://old.akbal.dev"
              read-more-link-href="/projects/old-akbal-dev"
            />
          </ul>
        </div>

        <div class="mt-2 container__inner">
          <p class="text-xs text-gray-400">
            You can scroll through the list. &rarr;
          </p>
        </div>
      </section>

      <Spacer />

      <!-- Contact -->
      <section id="contact" class="container__outer">
        <div class="container__inner">
          <div>
            <h2 class="text-lg font-medium leading-6 text-gray-200">Contact</h2>

            <p class="mt-1 text-sm text-gray-400">
              Tell me about an interesting business offer, something that you
              wanted to ask, or anything else.
              <em>
                But keep it
                <a
                  class="link focus:focus-util"
                  href="https://dictionary.cambridge.org/dictionary/english/succinct"
                >
                  succinct </a
                >.
              </em>
            </p>
          </div>

          <form
            method="GET"
            enctype="text/plain"
            action="mailto:contact@akbal.dev"
          >
            <div class="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
              <!-- Subject -->
              <div class="sm:col-span-2">
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <div class="mt-1">
                  <input
                    id="subject"
                    required
                    type="text"
                    name="subject"
                    class="block w-full text-white rounded-md border-darkGray-300 bg-darkGray-700 focus:focus-util sm:text-sm"
                  />
                </div>
              </div>

              <!-- Message -->
              <div class="sm:col-span-6">
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <div class="mt-1">
                  <textarea
                    id="message"
                    required
                    name="body"
                    rows="3"
                    class="block w-full text-white rounded-md border-darkGray-300 bg-darkGray-700 focus:focus-util sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <!-- Submit -->
            <div class="flex mt-8 sm:justify-end">
              <button
                type="submit"
                class="w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-orchid-600 sm:w-auto hover:bg-orchid-500 focus:focus-util"
              >
                Submit
              </button>
            </div>
          </form>

          <p class="mt-8 text-xs text-right text-gray-400">
            Or send an email to
            <a
              class="link focus:focus-util"
              href="mailto:contact@akbal.dev"
              target="_top"
            >
              contact@akbal.dev</a
            >.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
