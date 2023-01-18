<template>
  <div>
    <header>
      <!-- Hero image -->
      <div
        class="flex overflow-hidden bg-gradient-to-br from-accent-600 to-primary-600"
      >
        <img
          id="logo"
          src="/images/brand/logo_transparent.png"
          alt="Alejandro Akbal Logo"
          height="1024"
          width="1024"
          class="w-full h-auto m-auto sm:max-w-screen-sm"
        />
      </div>

      <!-- Navbar -->
      <nav class="p-4">
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
            <h1 class="text-xl font-semibold leading-snug text-gray-200">
              I'm Alejandro Akbal
            </h1>

            <h2 class="text-lg font-medium leading-loose text-gray-200">
              A software engineer based in Spain.
            </h2>

            <p class="text-gray-300">I have many passions…</p>

            <ul class="my-1 space-x-2 text-gray-300">
              <li class="mx-2">
                I like to write
                <a
                  class="link"
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
                  class="link"
                  href="https://redirect.akbal.dev/github"
                  target="_blank"
                  rel="noopener"
                >
                  open-source
                </a>
              </li>

              <li>Manage servers and systems</li>

              <li>Design mock-ups that focus on UX</li>

              <li>Delve into accessibility</li>
            </ul>

            <p class="text-gray-300">And much more.</p>

            <div class="mt-4">
              <h3 class="text-center text-gray-200">Find me on</h3>

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
          <h2 class="text-lg font-medium leading-normal text-gray-200">
            Projects
          </h2>

          <p class="mt-1 text-gray-300">
            Some of the work that I am most proud of.
          </p>
        </div>

        <div class="mt-4">
          <ul
            class="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[25%] gap-4 pb-4 overflow-x-auto sm:snap-none snap snap-x snap-proximity"
            dir="ltr"
          >
            <ProjectCard
              title="Ana Tejedor Díez Portfolio"
              description="A personal artist and illustrator portfolio."
              img-src="/images/projects/anatejedordiez-com.jpg"
              :img-width="1280"
              :img-height="1280"
              visit-link-href="https://web.archive.org/web/20220109162253/https://anatejedordiez.com/"
              read-more-link-href="/projects/anatejedordiez-com"
            />

            <ProjectCard
              title="PermanentLink"
              description="Commercial project for e-book authors."
              img-src="/images/projects/permanent-link-com.jpg"
              :img-width="1280"
              :img-height="1280"
              visit-link-href="https://permanent-link.com"
              read-more-link-href="/projects/permanent-link-com"
            />

            <ProjectCard
              title="Rule 34 App"
              description="NSFW Progressive Web Application with 40K daily users."
              img-src="/images/projects/r34-app.png"
              :img-width="1600"
              :img-height="1600"
              visit-link-href="https://r34.app/?domain=safebooru.org"
              read-more-link-href="/projects/r34-app"
            />

            <ProjectCard
              title="Torrent Mxchine"
              description="Commercial project for a torrent-based website."
              img-src="/images/projects/torrent-mx.jpg"
              :img-width="1280"
              :img-height="1280"
              visit-link-href="https://alejandroakbal.github.io/Torrent.mx"
              read-more-link-href="/projects/torrent-mx"
            />

            <ProjectCard
              title="Steam Little Toolkit"
              description="Web extension to improve the Steam store experience."
              img-src="/images/projects/steam-little-toolkit.jpg"
              :img-width="1280"
              :img-height="1280"
              visit-link-href="https://github.com/AlejandroAkbal/Steam-Little-Toolkit-Browser-Extension"
              read-more-link-href="/projects/steam-little-toolkit"
            />

            <ProjectCard
              title="Akbal's website"
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
          <p class="text-xs text-gray-300">
            You can scroll through the list. &rarr;
          </p>
        </div>
      </section>

      <Spacer />

      <!-- Contact -->
      <section id="contact" class="container__outer">
        <div class="container__inner">
          <div>
            <h2 class="text-lg font-medium leading-normal text-gray-200">
              Contact
            </h2>

            <p class="text-gray-300">
              Tell me about a business offer, an interesting fact, or anything
              else.
              <em>
                But keep it
                <a
                  class="link"
                  href="https://dictionary.cambridge.org/dictionary/english/succinct"
                >
                  succinct</a
                >.
              </em>
            </p>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div class="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
              <!-- Email -->
              <div class="sm:col-span-3 col-">
                <label
                  for="email"
                  class="block font-medium leading-loose text-gray-200"
                >
                  Email
                </label>

                <div class="mt-1">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    class="block w-full text-white rounded-md form-input border-darkGray-300 bg-darkGray-500 focus:focus-util sm:text-sm"
                    required
                  />
                </div>
              </div>

              <!-- Subject -->
              <div class="sm:col-start-1 sm:col-span-2">
                <label
                  for="subject"
                  class="block font-medium leading-loose text-gray-200"
                >
                  Subject
                </label>

                <div class="mt-1">
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    class="block w-full text-white rounded-md border-darkGray-300 bg-darkGray-500 focus:focus-util sm:text-sm form-input"
                    required
                  />
                </div>
              </div>

              <!-- Message -->
              <div class="sm:col-span-6">
                <label
                  for="message"
                  class="block font-medium leading-loose text-gray-200"
                >
                  Message
                </label>

                <div class="mt-1">
                  <textarea
                    id="message"
                    name="body"
                    rows="3"
                    class="block w-full text-white rounded-md form-textarea border-darkGray-300 bg-darkGray-500 focus:focus-util sm:text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <!-- Submit -->
            <div class="flex mt-8 sm:justify-end">
              <button
                type="submit"
                class="w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-primary-600 sm:w-auto hover:bg-primary-500 focus:focus-util"
              >
                Submit
              </button>
            </div>
          </form>

          <p class="mt-8 text-xs text-right text-gray-300">
            Or send an email to
            <a class="link" href="mailto:contact@akbal.dev" target="_top">
              contact@akbal.dev</a
            >.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
