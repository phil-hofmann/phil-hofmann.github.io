import React from "react";
import NextLink from "next/link";
import "@/components/Card/Card.css";

import type Entity from "@/models/entity";
import { HR } from "@/components/HR";
import { Link } from "@/components/ui/link";
import { FlexContainer } from "../FlexContainer";
import Image from "next/image";
import { assetPath } from "@/lib/paths";

export interface CardProps {
  entity: Entity;
  mode: "default" | "detail";
}

function Card({ entity, mode }: CardProps) {
  // Calendar dates must not move a day when rendered in another time zone.
  const dateParts = entity.date?.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
  const formattedDate = dateParts
    ? `${dateParts[1]}-${dateParts[2].padStart(2, "0")}-${dateParts[3].padStart(2, "0")}`
    : entity.date
      ? new Date(entity.date).toISOString().split("T")[0]
      : "";

  if (mode === "default") {
    const metadata: React.ReactNode[] = [];

    if (formattedDate) {
      metadata.push(<time dateTime={formattedDate}>{formattedDate}</time>);
    }
    if (entity.institution) metadata.push(entity.institution);

    return (
      <article className={`listing-card${entity.icon ? " listing-card-with-icon" : ""}`}>
        {entity.icon && (
          <Image
            className="listing-icon"
            src={assetPath(entity.icon)}
            alt=""
            height={80}
            width={80}
          />
        )}
        <div className="listing-body">
          <h2 className="listing-title">
            {entity.header_link ? (
              <NextLink href={entity.header_link} target="_blank" rel="noopener noreferrer">
                {entity.title}
              </NextLink>
            ) : entity.title}
          </h2>
          {entity.authors && <p className="listing-authors">{entity.authors}</p>}
          {metadata.length > 0 && (
            <p className="listing-metadata">
              {metadata.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <> <span aria-hidden="true">·</span> </>}
                  {item}
                </React.Fragment>
              ))}
            </p>
          )}
          {entity.description && (
            <p className="listing-description">{entity.description}</p>
          )}
          {Boolean(entity.links?.length) && (
            <div className="listing-links">
              {entity.links?.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  variant="underline"
                  className="m-0 p-0 text-sm leading-6"
                  aria-label={`${label}: ${entity.title}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <>
      {entity.icon && (
        <div className="card-icon">
          <Image src={assetPath(entity.icon)} alt="Icon" height={128} width={128} />
        </div>
      )}
      <FlexContainer className="mt-2.5">
        <div className="card-info">
          {entity.header_link ? (
            <NextLink href={entity.header_link} target="_blank" rel="noopener noreferrer">
              <h3>{entity.title}</h3>
            </NextLink>
          ) : (
            <h3>{entity.title}</h3>
          )}
          <ul>
            {entity.authors && entity.authors !== "" && (
              <li className="my-1">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h4>{entity.authors}</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            )}
            <li>
              <HR />
            </li>
            <li>
              <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                {entity.date && entity.date !== "" && (
                  <li className="flex items-center">
                    <time dateTime={formattedDate}>{formattedDate}</time>
                  </li>
                )}
                {entity.institution && entity.institution !== "" && (
                  <li className="flex items-center">
                    {entity.institution} &nbsp;
                  </li>
                )}
              </ul>
            </li>
          </ul>
          {entity.description && entity.description !== "" && (
            <p className="mt-6 text-lg leading-loose">{entity.description}</p>
          )}
          <div className="pt-4">
            {entity.links ? (
              <div className="flex gap-4">
                {entity.links.map(({ label, href }) => (
                  <Link key={href} href={href} target="_blank" variant="underline">
                    {label}
                  </Link>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </FlexContainer>
    </>
  );
}

export { Card };
