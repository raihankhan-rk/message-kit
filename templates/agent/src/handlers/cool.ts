import { XMTPContext } from "@xmtp/message-kit";

export async function handleCool(context: XMTPContext) {
  const {
    message: {
      content: {
        params: { domain },
      },
    },
  } = context;
  //What about these cool alternatives?\
  return {
    code: 200,
    message: `${generateCoolAlternatives(domain)}`,
  };
}

export const generateCoolAlternatives = (domain: string) => {
  const suffixes = ["lfg", "cool", "degen", "moon", "base", "gm"];
  const alternatives = [];
  for (let i = 0; i < 5; i++) {
    const randomPosition = Math.random() < 0.5;
    const baseDomain = domain.replace(/\.eth$/, ""); // Remove any existing .eth suffix
    alternatives.push(
      randomPosition
        ? `${suffixes[i]}${baseDomain}.eth`
        : `${baseDomain}${suffixes[i]}.eth`,
    );
  }

  const cool_alternativesFormat = alternatives
    .map(
      (alternative: string, index: number) => `${index + 1}. ${alternative} ✨`,
    )
    .join("\n");
  return cool_alternativesFormat;
};
