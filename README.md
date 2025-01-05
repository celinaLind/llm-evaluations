# eVallMe

## Steps

- [x] Planning Phase (flowchart, database breakdown, frontend design, etc) ~ 1.5 hours
- [ ] Create Base Application - in progress
- [ ] Frontend
- [ ] Backend

### Project Description

For this project, imagine you are an engineer at a startup building AI chat systems. You are tasked with developing a platform to evaluate Large Language Models (LLMs) for specific tasks. There are many startups that do this today, such as [BrainTrust](https://www.braintrust.dev/), [Arize](https://arize.com/), and [HumanLoop](https://humanloop.com/).

### Project Requirements:

- Create an full stack web app with an interface for inputting prompts and viewing responses from multiple LLMs side-by-side
- Integrate metrics such as accuracy, relevancy, and response time for each LLM
- Store user prompts and experiment results in a database
- Implement an analytics dashboard for visualizing performance metrics for different prompts and LLMs

### Resources

- [LLM Evaluation Guide](https://www.superannotate.com/blog/llm-evaluation-guide)
- [LLM Evaluation Metric](https://www.confident-ai.com/blog/llm-evaluation-metrics-everything-you-need-for-llm-evaluation)
- [LLMs as a Judge](https://arize.com/blog-course/llm-evaluation-the-definitive-guide/)
- [How to Evaluate LLM Performance for Domain-Specific Use Cases](https://www.youtube.com/watch?v=ZHjulqB-4A0)
- [Can LLMs Be an Alternative to Human Evaluation?](https://aclanthology.org/2023.acl-long.870.pdf)
- [Free LLM Evaluation Course](https://www.comet.com/site/llm-course/?utm_source=twitter&utm_campaign=course-oct24&twclid=23lq87blnd26e0rh1z8ki7z7c8)
- [Shadcn Charts](https://www.youtube.com/watch?v=uomhSl8vcSg#:~:text=Shadcn%20Charts%20:%20Beautiful%20Charts%20Using,chat.whatsapp....)
- [React Hook Form](https://react-hook-form.com/docs/usecontroller)
- [Zod Documentation](https://zod.dev/)

## Development Notes

#### [Adding Shadcn](https://ui.shadcn.com/docs/react-19)

Are readily designed / prestyled components that can be used for applications.
Received the following message when adding Shadcn (and corresponding components) to the app.
Command Run:
npx shadcn@latest init -d

    Message Received:
        It looks like you are using React 19.
        Some packages may fail to install due to peer dependency issues in npm (see https://ui.shadcn.com/react-19).

        ? How would you like to proceed? » - Use arrow-keys. Return to submit.
        Use --force
        Use --legacy-peer-deps

The issue is that some of the shadcn components don't work properly with React 19 when using npm. This meant I needed to use a flag to get past the dependency issues that may occur later. The flag options:

- --force: this flag **forces** npm to install packages while ignoring and overriding any peer dependency issues/conflicts
- --legacy-peer-deps: By skipping strict dep. checks and installing packages with unmet peer dep. to avoid errors

_NOTE: this problem does not occur when using pnpm, bun, or yarn (now I know for future use)_

#### Form

        import { zodResolver } from "@hookform/resolvers/zod"
        import { useForm } from "react-hook-form"
        import { z } from "zod"
