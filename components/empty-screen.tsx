import { UseChatHelpers } from 'ai/react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Build my first NEAR smart contract',
    message: `Help me create my first NEAR smart contract using Rust. Can you provide a step-by-step guide and a basic example?`
  },
  {
    heading: 'Help me integrate a NEAR Wallet',
    message: 'What are the steps to integrate NEAR Wallet into a JavaScript frontend application? Please provide a code snippet.'
  },
  {
    heading: 'How do I optimize gas fees?',
    message: 'What are some best practices for optimizing gas fees in NEAR smart contracts? Can you provide examples?'
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to the NEAR Founder Copilot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This AI-powered assistant, built by{' '}
          <ExternalLink href="https://hzn.xyz">Horizon</ExternalLink>,
          is designed to help you build on NEAR. Find real-time
          blockchain data, smart contract examples, and best practices for
          deploying your project.
        </p>
        <p className="leading-normal text-muted-foreground">
          Ask about NEAR architecture, Rust smart contracts, JavaScript SDK,
          or try these examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
