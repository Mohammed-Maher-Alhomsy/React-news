import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Link2Icon } from "@radix-ui/react-icons";

type Props = {
  url: string;
  img?: string;
  title: string;
  content?: string;
  createdAt?: string;
  description?: string;
  author?: string;
};

const NewsItem = ({
  title,
  url,
  img,
  content,
  createdAt,
  description,
}: Props) => {
  return (
    <li className="mb-3">
      <Card className="w-[350px] mx-auto">
        <CardHeader className="flex justify-between">
          {img && (
            <CardTitle className="text-gray-600">
              <img src={img} alt="" />
            </CardTitle>
          )}

          <CardTitle className="text-gray-600 line-clamp-2">{title}</CardTitle>

          {description && (
            <CardDescription className="text-red-500">
              {description}
            </CardDescription>
          )}
        </CardHeader>

        {content && (
          <CardContent className="truncate text-teal-600">
            {content}
          </CardContent>
        )}

        {createdAt && (
          <CardFooter>
            {/* {author} */}
            Created At: {createdAt.split("T")[0]}
          </CardFooter>
        )}

        <CardFooter>
          <p className="flex items-center gap-x-1">
            <Link2Icon />
            <a target="_blank" href={url}>
              More details
            </a>
          </p>
        </CardFooter>
      </Card>
    </li>
  );
};

export default NewsItem;
