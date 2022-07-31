import {
  IconBrandDribbble,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons";
import Layout from "components/templates/Layout";
import Section from "components/templates/Section";
import Button from "components/UI/atoms/Button";
import Flex from "components/UI/atoms/Flex";
import Hamburger from "components/UI/atoms/Hamburger";
import Logo from "components/UI/atoms/Logo";
import IntroCard from "components/UI/molecules/IntroCard";
import Nav from "components/UI/molecules/Nav";
import ProjectCard from "components/UI/molecules/ProjectCard";
import ServiceCard from "components/UI/molecules/ServiceCard";
import TestimonialCard from "components/UI/molecules/TestimonialCard";
import Banner from "components/UI/organism/Banner";
import Footer from "components/UI/organism/Footer";
import Header from "components/UI/organism/Header";
import { links, portfolios, services, teams, testimonials } from "fixtures";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  boxIllustrationContainer,
  boxIllustrationPlaceholder,
  cardGrid,
  introContainer,
  introLayout,
  serviceLayout,
  teamsLayout,
} from "styles/css";
import type { IMetaSeo } from "types";

const meta: IMetaSeo = {
  title: "Skyship",
  titleTemplate: "Skyship Software House",
  description:
    "Skyship is a software house based in Jakarta, Indonesia. Offering a vast range array of services from mobile development to web development",
  openGraph: {
    type: "website",
    site_name: "Skyship",
    url: process.env.NEXT_PUBLIC_WEBSITE_URL,
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "Software house, based in Jakarta, Indonesia, web development, mobile development, ReactJS, NextJS, VueJS, Javascript, Flutter, React Native, PHP, Graphql, REST API",
    },
    {
      name: "author",
      content: "Skyship",
    },
  ],
};

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  const handleHamburger = () => {
    setOpen((c) => !c);
  };

  return (
    <Layout {...meta}>
      <Header>
        <Nav>
          <Logo />
          <Nav.Items className={open ? "open" : ""}>
            {links.map((link) => (
              <Nav.Item key={link}>
                <Link href={link}>{link}</Link>
              </Nav.Item>
            ))}
          </Nav.Items>
          <Hamburger aria-pressed={open} onClick={handleHamburger} />
        </Nav>
        <Flex justifyContent="center" alignItems="center" css={introLayout}>
          <div css={boxIllustrationContainer}>
            <Image
              src="https://images.unsplash.com/photo-1549399905-5d1bad747576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=535&q=80"
              alt="Desk setup"
              width={400}
              height={400}
              layout="responsive"
              priority
            />
            <div css={boxIllustrationPlaceholder} />
          </div>
          <div css={introContainer}>
            <h1>We help startups and agencies to achieve their goals</h1>
            <p>We create beautiful digital products for our client around the world 🌏</p>
            <Link href="mailto: skyship@gmail.com?subject=Hei i would like to talk..." passHref>
              <Button size="lg" variant="primary">
                Let&apos;s talk
              </Button>
            </Link>
          </div>
        </Flex>
      </Header>
      <Section>
        <Section.Title>services</Section.Title>
        <Section.SubTitle>What service we offer 🗿</Section.SubTitle>
        <Flex css={serviceLayout}>
          <Flex direction="column">
            {services.map((service, idx) =>
              services[idx] === services[0] ? (
                <ServiceCard key={idx} {...service} className="active" />
              ) : (
                <ServiceCard key={idx} {...service} />
              ),
            )}
          </Flex>
          <div className="illustration">
            <Image
              src="/assets/undraw_programming_re_kg9v.svg"
              alt="Programmer while working"
              width={1500}
              height={800}
            />
          </div>
        </Flex>
      </Section>

      <Section>
        <Section.Title>teams</Section.Title>
        <Section.SubTitle>Who is part of Our team 🌟</Section.SubTitle>
        <Flex gap="2rem" flexWrap="wrap" css={teamsLayout}>
          {teams.map((dev, idx) => (
            <IntroCard key={idx} name={dev.name} picture={dev.picture} role={dev.role} />
          ))}
        </Flex>
      </Section>

      <Section>
        <Section.Title>portfolios</Section.Title>
        <Section.SubTitle>Some projects that we&apos;ve done in the past 🚀</Section.SubTitle>
        <div css={cardGrid}>
          {portfolios.map((portfolio, idx) => (
            <ProjectCard key={idx} {...portfolio} />
          ))}
        </div>
      </Section>

      <Section>
        <Section.Title>testimonials</Section.Title>
        <Section.SubTitle>What people writing about Us 💙</Section.SubTitle>
        <div css={cardGrid}>
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </Section>
      <Banner>
        <Banner.Title>We accept new project</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, hic! Obcaecati laborum
          cupiditate quod, repudiandae inventore quibusdam nisi ipsum magnam. Nesciunt commodi
          aliquam non obcaecati corrupti nulla earum ducimus aliquid?
        </Banner.Description>
        <Link href="mailto: skyship@gmail.com?subject=Hei i would like to talk..." passHref>
          <Button
            variant="secondary"
            size="md"
            css={`
              margin-top: 0.5rem;
            `}
            asLink
          >
            Contact Us
          </Button>
        </Link>
      </Banner>
      <Footer>
        <Logo />
        <a>&copy; {new Date().getFullYear()} - SkyShip</a>
        <Flex gap="1rem">
          <Footer.IconContainer>
            <IconBrandFacebook />
          </Footer.IconContainer>
          <Footer.IconContainer>
            <IconBrandInstagram />
          </Footer.IconContainer>
          <Footer.IconContainer>
            <IconBrandDribbble />
          </Footer.IconContainer>
          <Footer.IconContainer>
            <IconBrandWhatsapp />
          </Footer.IconContainer>
        </Flex>
      </Footer>
    </Layout>
  );
};

export default Home;
