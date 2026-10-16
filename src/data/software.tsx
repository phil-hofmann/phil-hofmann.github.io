// data/software.tsx
import Entity from "@/models/entity";

const SoftwareEntities: Entity[] = [
  {
    id: "lpfun",
    icon: "/software/lpfun.png",
    title: "lpFun",
    description:
      "lpFun is a high-performance Python package for fast multivariate interpolation and differentiation in downward closed polynomial spaces. Built on the Fast Newton Transform (FNT), it enables efficient computation of polynomial approximations and their derivatives, making it ideal for scientific computing — particularly spectral methods in high-dimensional settings — as well as a wide range of other numerical tasks.",
    links: [
      {
        label: "Website",
        href: "https://phil-hofmann.github.io/lpFun",
      },
      {
        label: "Repository",
        href: "https://github.com/phil-hofmann/lpFun",
      },
    ],
  },
  {
    id: "pylit",
    icon: "/software/pylit.png",
    title: "PyLIT",
    description:
      "Pylit is a Python package for performing double sided inverse Laplace transformations, with a focus on applications in quantum many-body theory. It offers a flexible and efficient framework for reconstructing spectral functions from imaginary-time data using advanced regression and optimization techniques.",
    links: [
      {
        label: "Website",
        href: "https://phil-hofmann.github.io/PyLIT",
      },
      {
        label: "Repository",
        href: "https://github.com/phil-hofmann/PyLIT",
      },
    ],
  },
  {
    id: "sinos",
    title: "SINOS",
    description:
      "Python implementations and numerical experiments for SINOS and D-SINOS, negative-order Sobolev loss formulations for physics-informed neural networks. Includes spectral benchmarks and applications to the Poisson, convection–diffusion–reaction, and stationary incompressible Navier–Stokes equations.",
    links: [
      {
        label: "Repository",
        href: "https://github.com/phil-hofmann/SINOS",
      },
    ],
  },
  {
    id: "lp-compression",
    title: "lp-compression",
    description:
      "A Python-based compression pipeline for images, videos, and 3D videos that evaluates reconstruction quality using PSNR and other metrics.",
    links: [
      {
        label: "Repository",
        href: "https://github.com/scott-frowiss/lp-compression",
      },
    ],
  },
];

export default SoftwareEntities;
