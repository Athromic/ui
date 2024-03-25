import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/new-york/ui/button"
import MailPage from "@/app/(app)/examples/mail/page"

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Use multiple LLMs at once</PageHeaderHeading>
        <PageHeaderDescription>
          Athromic gives you the ability to use multiple LLMs such as ChatGPT and Claude side-by-side with the same prompt or different prompts.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
      <section className="container grid items-center gap-12 text-clip py-20 md:pb-44 md:pt-12">
        <div className="mx-auto flex flex-col gap-4">
          <h2 className=" text-center text-4xl font-semibold">
            Meet Athro.
          </h2>
          <p className="mx-auto max-w-lg text-center text-lg text-muted-foreground">
          Meet Athro, your personalized AI companion powered by the LLama2 70B model. With its advanced capabilities, Athro can adapt its behavior to suit your unique preferences and needs, ensuring a truly customized experience. 
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-lg bg-background/90 p-8  text-muted-foreground dark:bg-muted/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-200 text-green-700 dark:bg-green-600/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20L14 4M18 8.00004L20.5858 10.5858C21.3668 11.3669 21.3668 12.6332 20.5858 13.4143L18 16M6 16L3.41421 13.4143C2.63316 12.6332 2.63317 11.3669 3.41421 10.5858L6 8.00004"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-medium text-foreground/80">
              Understanding Your Code with Athromic
              </div>
              <div>
              Athromic clarifies code sections or entire files for better comprehension.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-background/90 p-8 text-muted-foreground dark:bg-muted/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-200 text-pink-600 dark:bg-pink-600/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 11.5L12 8.5L15 11.5M12 15.5V9.5M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-medium text-foreground/80">
              Seamless Workflow Integration
              </div>
              <div>
              Utilize Athromic's APIs effortlessly to blend it into your project workflow.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-background/90 p-8 text-muted-foreground dark:bg-muted/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-200 text-blue-700 dark:bg-blue-600/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9998 14H19.002C20.1065 14 21.002 13.1046 21.002 12V6C21.002 4.89543 20.1065 4 19.002 4H9.00195C7.89738 4 7.00195 4.89543 7.00195 6V8M15.002 8H5.00195C3.89738 8 3.00195 8.89543 3.00195 10V16C3.00195 17.1046 3.89738 18 5.00195 18H6.00195V20.5L10.502 18H15.002C16.1065 18 17.002 17.1046 17.002 16V10C17.002 8.89543 16.1065 8 15.002 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-medium text-foreground/80">
              Comprehensive Code Analysis
              </div>
              <div>
              Athromic scrutinizes your codebase, crafting code for your existing APIs seamlessly.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container grid items-center gap-12 text-clip py-20 md:pb-44 md:pt-12">
        <div className="flex flex-col  gap-8 md:flex-row md:gap-24">
          <div className="flex flex-col gap-4 md:w-1/3">
            <h2 className="text-4xl font-semibold">FAQ</h2>
            <p className="text-muted-foreground">
            These are some common questions we receive:
            </p>
          </div>
          <div className="md:w-2/3">
            <div className="flex flex-col gap-8 text-lg">
              <div className="flex flex-col gap-2 ">
                <div className="font-medium">
                Is Athromic Free?
                </div>
                <div className="text-base text-muted-foreground">
                Yes, Athromic offers a free plan allowing you to utilize its features. With the free plan, you can make up to 15 requests per day. For unlimited code generation, consider upgrading to our Pro or Enterprise plan.
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium">Can Athromic Build Code on My Existing Codebase?</div>
                <p className="text-base text-muted-foreground">
                Absolutely. Athromic seamlessly integrates with your existing codebase. Using advanced machine learning models, Athromic analyzes your codebase and intelligently incorporates existing functions into generated code.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-medium">
                Can Athromic Test My Code?
                </div>
                <div className="text-base text-muted-foreground">
                Yes, Athromic provides code testing capabilities to identify errors and formatting issues in your codebase. However, it's important to note that while Athromic is proficient, it may not catch all issues, so manual review is still recommended for comprehensive testing.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container grid items-center gap-12 text-clip py-20 md:pb-44 md:pt-12">
        <div className="flex  gap-24">
          <div className="mx-auto flex  max-w-lg flex-col gap-4 text-center">
            <h2 className="text-4xl font-semibold">Join the waitlist</h2>
            <p className="text-muted-foreground">
              Enter your email bellow to join the waitlist.
            </p>

            {<div className="py-8">
              <SignupForm />
            </div> }
          </div>
        </div>
      </section>
    </div>
  )
}
