"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FOOTER_LINKS,HIDDEN_PATHS } from "@/features/layout/constants/menu";

const SOCIAL_LINKS = [
  {
    name: "Email",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px]"
      >
        <path
          fill="#4caf50"
          d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
        />
        <path
          fill="#1e88e5"
          d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
        />
        <polygon
          fill="#e53935"
          points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
        />
        <path
          fill="#c62828"
          d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
        />
        <path
          fill="#fbc02d"
          d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
        />
      </svg>
    ),
  },
  {
    name: "Line",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px]"
      >
        <path
          fill="#00c300"
          d="M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z"
        />
        <path
          fill="#fff"
          d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px]"
      >
        <linearGradient
          id="PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1"
          x1="9.816"
          x2="41.246"
          y1="9.871"
          y2="41.301"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f44f5a" />
          <stop offset=".443" stopColor="#ee3d4a" />
          <stop offset="1" stopColor="#e52030" />
        </linearGradient>
        <path
          fill="url(#PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1)"
          d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"
        />
        <path
          d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z"
          opacity=".05"
        />
        <path
          d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z"
          opacity=".07"
        />
        <path
          fill="#fff"
          d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px]"
      >
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
          cx="19.38"
          cy="42.035"
          r="44.899"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fd5" />
          <stop offset=".328" stopColor="#ff543f" />
          <stop offset=".348" stopColor="#fc5245" />
          <stop offset=".504" stopColor="#e64771" />
          <stop offset=".643" stopColor="#d53e91" />
          <stop offset=".761" stopColor="#cc39a4" />
          <stop offset=".841" stopColor="#c837ab" />
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        />
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
          cx="11.786"
          cy="5.54"
          r="29.813"
          gradientTransform="matrix(1 0 0 .6663 0 1.849)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4168c9" />
          <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        />
        <path
          fill="#fff"
          d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
        />
        <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
        <path
          fill="#fff"
          d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px]"
      >
        <linearGradient
          id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
          x1="9.993"
          x2="40.615"
          y1="9.993"
          y2="40.615"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#2aa4f4" />
          <stop offset="1" stopColor="#007ad9" />
        </linearGradient>
        <path
          fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
          d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
        />
        <path
          fill="#fff"
          d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
        />
      </svg>
    ),
  },
] as const;

const Logo = () => (
  <Link href="/">
    <div className="navbar-start w-fit">
      <img
        src="/icons/simplydev.png"
        alt="simple_dev_icon"
        className="mr-2 md:w-9 md:h-9 lg:w-10 lg:h-10"
      />
      <h2 className="font-semibold text-primary">SimplyDev</h2>
    </div>
  </Link>
);

const SocialMediaBar = () => (
  <div className="media flex w-full justify-center items-center mb-6">
    <hr className="flex-1 text-[#CAC4D0]" />
    <nav className="flex justify-center items-center gap-x-12 max-xs:gap-x-8 flex-none mx-10">
      {SOCIAL_LINKS.map((social) => (
        <a key={social.name} aria-label={social.name}>
          {social.icon}
        </a>
      ))}
    </nav>
    <hr className="flex-1 text-[#CAC4D0]" />
  </div>
);

const BrandSection = () => (
  <aside className="max-xs:justify-items-center">
    <Logo />
    <p className="leading-6 max-md:hidden">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim
      ligula non egestas placerat. Cras vitae pulvinar mi. Suspendisse facilisis
      sodales pretium.
    </p>
  </aside>
);

interface FooterLinksProps {
  title: string;
  links: readonly { label: string; href: string }[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => (
  <nav className="mx-auto justify-items-center">
    <h3 className="footer-title font-semibold text-black">{title}</h3>
    {links.map((link) => (
      <a key={link.label} href={link.href} className="link link-hover">
        {link.label}
      </a>
    ))}
  </nav>
);

// Main Component
export default function Footer() {
  const pathname = usePathname();

  const shouldShowFooter = !HIDDEN_PATHS.includes(pathname);

  if (!shouldShowFooter) return null;

  return (
    <div className="p-[50px] max-lg:p-[15px] max-lg:pt-[50px]">
      <SocialMediaBar />

      <footer className="footer sm:footer-horizontal grid grid-cols-[1fr_1fr_1fr] max-xs:block max-xs:space-y-8 max-md:justify-items-center">
        <BrandSection />
        <FooterLinks
          title={FOOTER_LINKS.info.title}
          links={FOOTER_LINKS.info.links}
        />
        <FooterLinks
          title={FOOTER_LINKS.help.title}
          links={FOOTER_LINKS.help.links}
        />
      </footer>
    </div>
  );
}
