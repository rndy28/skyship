import {
  IconBrandDribbble,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons";
import Layout from "components/templates/Layout";
import Section from "components/templates/Section";
import Button from "components/UI/atoms/Button";
import Hamburger from "components/UI/atoms/Hamburger";
import Logo from "components/UI/atoms/Logo";
import Article from "components/UI/molecules/Article";
import IntroCard from "components/UI/molecules/IntroCard";
import Nav from "components/UI/molecules/Nav";
import ProjectCard from "components/UI/molecules/ProjectCard";
import ServiceCard from "components/UI/molecules/ServiceCard";
import TestimonialCard from "components/UI/molecules/TestimonialCard";
import Banner from "components/UI/organism/Banner";
import Footer from "components/UI/organism/Footer";
import Header from "components/UI/organism/Header";
import { links, portfolios, services, teams, testimonials } from "fixtures";
import { postsQuery } from "lib/queries";
import { sanityClient } from "lib/sanity.server";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { IMetaSeo } from "types";
import type { Post } from "types";

const meta: IMetaSeo = {
  title: "skyship",
  titleTemplate: "skyship software house",
  description:
    "skyship is a software house based in Jakarta, Indonesia. Offering a vast range array of services from mobile development to web development",
  openGraph: {
    type: "website",
    site_name: "skyship",
    url: process.env.NEXT_PUBLIC_WEBSITE_URL,
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "skyship software house, software house, startup, based in Jakarta, Indonesia, web development, mobile development, ReactJS, NextJS, VueJS, Javascript, Flutter, React Native, PHP, Graphql, REST API",
    },
    {
      name: "author",
      content: "skyship",
    },
  ],
};

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const [open, setOpen] = useState(false);

  const handleHamburger = () => {
    setOpen((c) => !c);
  };

  return (
    <Layout {...meta}>
      <Header>
        <Nav>
          <Logo />
          <Nav.Items isOpen={open}>
            {links.map((link) =>
              link === "home" ? (
                <Nav.Item key={link}>
                  <Link href="/">{link}</Link>
                </Nav.Item>
              ) : (
                <Nav.Item key={link}>
                  <Link href={link}>{link}</Link>
                </Nav.Item>
              )
            )}
          </Nav.Items>
          <Hamburger className="2md:hidden" aria-pressed={open} onClick={handleHamburger} />
        </Nav>
        <div className="flex justify-center items-center mt-40 2md:gap-12 2md:mt-0 2md:h-[calc(100vh_-_7rem)] xl:gap-20 2xl:gap-24 3xl:gap-[28rem]">
          <div
            className="hidden 2md:inline-block 2md:relative 2md:min-h-[17rem] 2md:w-[17rem] min-[1000px]:min-h-[19rem] min-[1000px]:w-[19rem] min-[1100px]:min-h-[22rem] min-[1100px]:w-[22rem] min-[1200px]:min-h-[24rem] min-[1200px]:w-[24rem] min-[1300px]:min-h-[28rem] min-[1300px]:w-[28rem]"
            data-aos="fade-up"
          >
            <Image
              src="https://images.unsplash.com/photo-1549399905-5d1bad747576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=535&q=80"
              alt="Desk setup"
              width={400}
              height={400}
              layout="responsive"
              priority
            />
            <div className="2md:min-h-inherit 2md:w-inherit 2md:absolute 2md:top-8 2md:right-8 2md:z-[-1] 2md:bg-primary" />
          </div>
          <div
            className="max-w-[30rem] mr-auto 2md:mr-0 min-[1200px]:max-w-[40rem]"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h1 className="text-4xl 2md:text-5xl min-[1200px]:text-[4rem] min-[1200px]:leading-[1.1]">
              We help startups and agencies to achieve their goals
            </h1>
            <p className="mt-4 mb-5 min-[1200px]:max-w-[30rem]">
              We create beautiful digital products for our client around the world 🌏
            </p>
            <Button
              size="lg"
              variant="primary"
              asLink
              href="mailto: skyship@gmail.com?subject=Hei i would like to talk..."
            >
              Let&apos;s talk
            </Button>
          </div>
        </div>
      </Header>
      <Section className="mb-40">
        <Section.Title>services</Section.Title>
        <Section.SubTitle>What service we offer 🗿</Section.SubTitle>
        <div className="flex flex-col gap-12 2md:flex-row 2md:gap-0">
          <div className="flex flex-col">
            {services.map((service, idx) =>
              services[idx] === services[0] ? (
                <ServiceCard
                  key={idx}
                  {...service}
                  data-aos="fade-right"
                  data-aos-delay="200"
                  priority
                />
              ) : (
                <ServiceCard key={idx} {...service} data-aos="fade-right" data-aos-delay="200" />
              )
            )}
          </div>
          <div data-aos="fade-up">
            <Image
              src="/assets/undraw_programming_re_kg9v.svg"
              alt="Programmer while working"
              width={1500}
              height={800}
            />
          </div>
        </div>
      </Section>

      <Section className="mb-40">
        <Section.Title>teams</Section.Title>
        <Section.SubTitle>Who is part of Our team 🌟</Section.SubTitle>
        <div className="flex gap-8 flex-wrap justify-center sm:justify-between">
          {teams.map((dev, idx) => (
            <IntroCard
              key={idx}
              name={dev.name}
              picture={dev.picture}
              position={dev.role}
              data-aos="fade-up"
              data-aos-delay={300 * (idx + 1)}
            />
          ))}
        </div>
      </Section>

      <Section className="mb-40">
        <Section.Title>portfolios</Section.Title>
        <Section.SubTitle>Some projects that we&apos;ve done in the past 🚀</Section.SubTitle>
        <div className="grid md:grid-cols-[repeat(auto-fit,_minmax(24rem,_1fr))] gap-8 place-items-center">
          {portfolios.map((portfolio, idx) => (
            <ProjectCard
              key={idx}
              {...portfolio}
              data-aos="fade-up"
              data-aos-delay={300 * (idx + 1)}
            />
          ))}
        </div>
      </Section>

      <Section className="mb-40">
        <Section.Title>testimonials</Section.Title>
        <Section.SubTitle>What people writing about Us 💙</Section.SubTitle>
        <div className="grid md:grid-cols-[repeat(auto-fit,_minmax(24rem,_1fr))] gap-8 place-items-center">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              {...testimonial}
              data-aos="fade-up"
              data-aos-delay={400 * (idx + 1)}
            />
          ))}
        </div>
      </Section>

      <Section className="mb-40">
        <Section.Title>articles</Section.Title>
        <Section.SubTitle>We write articles too 😊</Section.SubTitle>
        <div className="grid gap-8 justify-center auto-rows-[1fr] grid-cols-[22rem] md:grid-cols-[repeat(2,_22rem)] lg:justify-between lg:grid-cols-[repeat(auto-fit,_minmax(23rem,_1fr))]">
          {posts.map((post, idx) => (
            <Article
              author={post.author}
              title={post.title}
              excerpt={post.excerpt}
              publishedAt={post.publishedAt}
              slug={post.slug}
              thumbnail={post.coverImage.asset._ref}
              key={post._id}
              data-aos="fade-up"
              data-aos-delay={400 * (idx + 1)}
            />
          ))}
        </div>
        <Link href="/blog" passHref>
          <a className="border-b-[2px] border-solid border-primary pb-1 inline-block mt-8 text-[#20242d] text-lg">
            read more...
          </a>
        </Link>
      </Section>

      <Banner>
        <Banner.Title>We accept new project</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, hic! Obcaecati laborum
          cupiditate quod, repudiandae inventore quibusdam nisi ipsum magnam. Nesciunt commodi
          aliquam non obcaecati corrupti nulla earum ducimus aliquid?
        </Banner.Description>
        <Button
          variant="neutral"
          size="md"
          className="mt-2"
          asLink
          href="mailto: skyship@gmail.com?subject=Hei i would like to talk..."
        >
          Contact Us
        </Button>
      </Banner>
      <Footer>
        <p className="text-white">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span className="underline underline-offset-2 font-bold">skyship</span> All Rights
          Reserved.
        </p>
        <div className="flex gap-4">
          <Footer.IconContainer href="https://www.facebook.com/">
            <IconBrandFacebook />
          </Footer.IconContainer>
          <Footer.IconContainer href="https://instagram.com/">
            <IconBrandInstagram />
          </Footer.IconContainer>
          <Footer.IconContainer href="https://dribbble.com/">
            <IconBrandDribbble />
          </Footer.IconContainer>
          <Footer.IconContainer href="https://www.linkedin.com/">
            <IconBrandLinkedin />
          </Footer.IconContainer>
        </div>
      </Footer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await sanityClient.fetch<Post[]>(postsQuery);
  return {
    props: {
      posts,
    },
  };
};

export default Home;
