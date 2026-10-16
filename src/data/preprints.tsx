// data/preprints.tsx
import Entity from "@/models/entity";

// Dates are the first arXiv submission (v1), stored as ISO calendar dates.
const PreprintsEntities: Entity[] = [
  {
    id: "8",
    title:
      "Analysis of the Ill-Conditioning of the Discrete Inverse Laplace transform in Monte Carlo Simulations of Quantum Many-Body Systems",
    authors: "Phil-Alexander Hofmann, Thomas Chuna, Tobias Dornheim, Michael Hecht",
    institution: "arXiv",
    date: "2026-09-07",
    header_link: "https://arxiv.org/pdf/2609.07208",
  },
  {
    id: "7",
    title:
      "Mitigating Numerical Stiffness in Least-Squares Formulations of Elliptic PDEs for Physics-Informed Neural Networks",
    authors: "Phil-Alexander Hofmann, Michael Hecht",
    institution: "arXiv",
    date: "2026-07-02",
    header_link: "https://arxiv.org/pdf/2607.02726",
  },
  {
    id: "9",
    title:
      "Discovering a well-conditioned analytic continuation problem via dictionary learning",
    authors:
      "Thomas Chuna, Phil-Alexander Hofmann, Alexander Benedix-Robles, Tobias Dornheim",
    institution: "arXiv",
    date: "2026-06-17",
    header_link: "https://arxiv.org/pdf/2606.19205",
  },
  {
    id: "5",
    title:
      "Accelerating Multivariate Newton Interpolation in Downward Closed Polynomial Spaces",
    authors: "Phil-Alexander Hofmann, Michael Hecht",
    institution: "arXiv",
    date: "2025-05-20",
    header_link: "https://arxiv.org/pdf/2505.14909",
  },
  {
    id: "4",
    title: "Second roton feature in the strongly coupled electron liquid",
    authors:
      "Thomas M Chuna, Jan Vorberger, Panagiotis Tolias, Alexander Benedix Robles, Michael Hecht, Phil-Alexander Hofmann, Zhandos A Moldabekov, Tobias Dornheim",
    institution: "arXiv",
    date: "2025-05-16",
    header_link: "https://arxiv.org/pdf/2505.11150",
  },
  {
    id: "3",
    title:
      "PyLIT: Reformulation and implementation of the analytic continuation problem using kernel representation methods",
    authors:
      "Alexander Benedix Robles, Phil-Alexander Hofmann, Thomas M Chuna, Tobias Dornheim, Michael Hecht",
    institution: "arXiv",
    date: "2025-05-15",
    header_link: "https://arxiv.org/pdf/2505.10211",
  },
  {
    id: "2",
    title:
      "Multivariate Newton Interpolation in Downward Closed Spaces Reaches the Optimal Geometric Approximation Rates for Bos-Levenberg-Trefethen Functions",
    authors:
      "Michael Hecht, Phil-Alexander Hofmann, Damar Wicaksono, Uwe Hernandez Acosta, Krzysztof Gonciarz, Jannik Kissinger, Vladimir Sivkin, Ivo F. Sbalzarini",
    institution: "arXiv",
    date: "2025-04-24",
    header_link: "https://arxiv.org/pdf/2504.17899",
  },
  {
    id: "1",
    title:
      "Learning Partial Differential Equations by Spectral Approximates of General Sobolev Spaces",
    authors:
      "Juan-Esteban Suarez Cardona, Phil-Alexander Hofmann, Michael Hecht",
    institution: "arXiv",
    date: "2023-01-12",
    header_link: "https://arxiv.org/pdf/2301.04887",
  },
];

export default PreprintsEntities;
