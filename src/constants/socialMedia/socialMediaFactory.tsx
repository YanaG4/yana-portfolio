interface SMProps {
  name: string;
  url?: string;
  text?: string;
  Icon: React.ReactElement;
}

type eventType = React.MouseEvent | React.TouchEvent;
type ActionType = (() => void) | ((event: eventType) => void);

export interface SMType extends SMProps {
  action: ActionType;
}

export function createSocialMedia({name, url, Icon, text}: SMProps) {
  const baseObject = {
    name,
    url,
    Icon,
  }
  
  if(name.toLowerCase() === 'mail') {
    return {
      ...baseObject,
      text,
      action: (event: eventType) => {
        event.preventDefault();
        window.location.href = `mailto:${text}?subject=Hi Yana, we want to hire you!`;
      },
    }
  }
  return {
    ...baseObject,
    action: () => window.open(url, '_blank', 'noopener,noreferrer'),
  }
}
