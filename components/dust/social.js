import { FaGithub, FaFacebook, FaYoutube, FaInstagram, FaMicrosoft } from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";

export default function Social({ type }) {
    let [social] = useState([
      {
        href: "https://www.github.com/buttafraz22",
        icon: {
          icon: FaGithub,
          fill: clsx('hover:fill-black')
        },
      },
      {
        href: "https://web.facebook.com/ButtAfraz-26",
        icon: {
          icon: FaFacebook,
          fill: clsx('hover:fill-brand-fb')
        },
      },
      {
        href: "https://www.youtube.com/channel/UCZgxbfhIWfhYua7iPzxiLEA",
        icon: {
          icon: FaYoutube,
          fill: clsx("hover:fill-red-500"),
        },
      },
      {
        href: "https://instagram.com/buttafraz",
        icon: {
          icon: FaInstagram,
          fill: clsx("hover:fill-[url(#instagram-gradient)]"),
        },
      },
      {
        href: "https://mvp.microsoft.com/en-US/studentambassadors/profile/b140815c-ae77-4c23-9eb6-997d24c35636",
        icon: {
          icon: FaMicrosoft,
          fill: clsx('hover:fill-red-500'),
        },
      },
    ]);

    return (
      <>
        <div
          className={`flex text-2xl text-gray-500 ${
            type === "footer"
              ? "space-x-4 ml-2 md:space-x-6"
              : "space-x-7 mt-2 text-center md:text-left"
          }`}
        >
          {social.map(({ href, icon }) => {
            return (
              <Fragment key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <icon.icon
                    className={`${icon.fill} transition delay-150`}
                  />
                </a>
              </Fragment>
            );
          })}
        </div>
      </>
    );
}