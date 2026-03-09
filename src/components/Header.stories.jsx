import Header from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    title: "Storybook",
    links: ["Início", "Sobre"],
  },
};

export const WithMoreLinks = {
  args: {
    title: "Minha Página",
    links: ["Início", "Produtos", "Contato"],
  },
};

export const Minimal = {
  args: {
    title: "Site",
    links: ["Home"],
  },
};