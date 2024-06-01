import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GlobeIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Company } from "@/types/api";
import clsx from "clsx";
import { RenderComponentProps } from "masonic";

export type CardCompanyProps = RenderComponentProps<Company>;

const CardCompany = ({
  data: { name, url, career_page_url, type, categories, hiring_policies, tags },
}: CardCompanyProps) => {
  return (
    <div className="card-company">
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{type}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className={clsx({ "text-muted-foreground": !tags })}>
            {tags?.join(", ") || "Please contribute by adding relevant tags"}
          </p>
        </CardContent>
        <CardFooter className="flex gap-x-4">
          <a
            href={career_page_url}
            className={cn(buttonVariants({ variant: "outline" }), "flex-1")}
            target="_blank"
          >
            Apply
          </a>
          <a
            href={url}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            target="_blank"
          >
            <GlobeIcon className="h-4 w-4" />
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardCompany;
