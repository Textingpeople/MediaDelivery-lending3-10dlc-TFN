const SAMPLE_MESSAGES: string[] = [
  "FutureReady: You're signed up for milestone alerts from your employer's benefits program. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.",
  'FutureReady: Open enrollment starts Monday. Review your benefit choices at getfuturereadynow.com. Reply STOP to opt out.',
  'FutureReady: Reminder: your 401(k) match details are ready to review at getfuturereadynow.com. Reply STOP to opt out.',
  'FutureReady: New milestone guide: buying your first home. Read it at getfuturereadynow.com. Reply STOP to opt out.',
  "FutureReady: It's been 3 months since you set your milestones. Check in at getfuturereadynow.com. Reply STOP to opt out.",
];

export default function SmsSampleMessages() {
  return (
    <div>
      <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Sample Messages</p>
      <ol className="space-y-2">
        {SAMPLE_MESSAGES.map((message, i) => (
          <li
            key={i}
            className="rounded-xl p-3 flex gap-3"
            style={{ background: 'rgba(142,69,133,0.06)', border: '1px solid rgba(142,69,133,0.15)', fontSize: '0.85rem', lineHeight: 1.6 }}
          >
            <span className="font-mono-label flex-shrink-0" style={{ color: 'var(--olive)', fontSize: '0.65rem', paddingTop: '0.15rem' }}>
              {i + 1}.
            </span>
            <span>{message}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
