import type { DiagramKey } from '@/data/profile';

type Node = { id: string; x: number; y: number; w: number; h: number; label: string; sub?: string; tone?: 'sap' | 'ext' | 'hub' | 'warn' };
type Edge = { from: string; to: string; label?: string; dashed?: boolean };
type Spec = { width: number; height: number; nodes: Node[]; edges: Edge[]; groups?: { x: number; y: number; w: number; h: number; label: string }[] };

// Generic, client-neutral redraws of patterns used on real projects.
const specs: Record<DiagramKey, Spec> = {
  'api-led': {
    width: 860,
    height: 280,
    groups: [
      { x: 190, y: 20, w: 390, h: 240, label: 'SAP BTP — Integration Suite' },
    ],
    nodes: [
      { id: 'c1', x: 20, y: 50, w: 140, h: 56, label: 'Web / mobile apps', tone: 'ext' },
      { id: 'c2', x: 20, y: 170, w: 140, h: 56, label: 'Partner systems', sub: 'Salesforce, 3PL', tone: 'ext' },
      { id: 'apim', x: 205, y: 105, w: 160, h: 70, label: 'API Management', sub: 'OAuth · quota · spike arrest', tone: 'hub' },
      { id: 'cpi', x: 400, y: 105, w: 160, h: 70, label: 'Cloud Integration', sub: 'route · map · enrich', tone: 'hub' },
      { id: 'cc', x: 630, y: 30, w: 120, h: 56, label: 'Cloud Connector', sub: 'OData / RFC', tone: 'sap' },
      { id: 's4', x: 765, y: 30, w: 85, h: 56, label: 'S/4HANA', sub: 'on-premise', tone: 'sap' },
      { id: 'snow', x: 630, y: 190, w: 220, h: 56, label: 'SaaS targets', sub: 'Snowflake · SharePoint · Azure Blob', tone: 'ext' },
    ],
    edges: [
      { from: 'c1', to: 'apim', label: 'REST' },
      { from: 'c2', to: 'apim' },
      { from: 'apim', to: 'cpi', label: 'proxy' },
      { from: 'cpi', to: 'cc' },
      { from: 'cc', to: 's4' },
      { from: 'cpi', to: 'snow' },
    ],
  },
  'event-driven': {
    width: 860,
    height: 280,
    groups: [{ x: 230, y: 20, w: 260, h: 240, label: 'Advanced Event Mesh (Solace)' }],
    nodes: [
      { id: 's4', x: 20, y: 110, w: 150, h: 60, label: 'S/4HANA', sub: 'business events', tone: 'sap' },
      { id: 'topic', x: 250, y: 110, w: 90, h: 60, label: 'Topic', sub: 'sales/order/*', tone: 'hub' },
      { id: 'q1', x: 380, y: 50, w: 90, h: 48, label: 'Queue A', tone: 'hub' },
      { id: 'q2', x: 380, y: 116, w: 90, h: 48, label: 'Queue B', tone: 'hub' },
      { id: 'q3', x: 380, y: 182, w: 90, h: 48, label: 'Webhook', tone: 'hub' },
      { id: 'cpi', x: 540, y: 60, w: 140, h: 60, label: 'Cloud Integration', sub: 'AMQP consumer', tone: 'hub' },
      { id: 'sf', x: 720, y: 30, w: 120, h: 48, label: 'Salesforce', tone: 'ext' },
      { id: 'snow', x: 720, y: 100, w: 120, h: 48, label: 'Snowflake', tone: 'ext' },
      { id: 'ext', x: 720, y: 182, w: 120, h: 48, label: '3rd-party app', tone: 'ext' },
    ],
    edges: [
      { from: 's4', to: 'topic', label: 'publish' },
      { from: 'topic', to: 'q1' },
      { from: 'topic', to: 'q2' },
      { from: 'topic', to: 'q3' },
      { from: 'q1', to: 'cpi', label: 'AMQP' },
      { from: 'q2', to: 'cpi' },
      { from: 'cpi', to: 'sf' },
      { from: 'cpi', to: 'snow' },
      { from: 'q3', to: 'ext', label: 'HTTP push' },
    ],
  },
  'b2b-edi': {
    width: 860,
    height: 260,
    groups: [{ x: 200, y: 20, w: 420, h: 220, label: 'SAP Integration Suite' }],
    nodes: [
      { id: 'tp', x: 20, y: 95, w: 140, h: 64, label: 'Trading partner', sub: '3PL / supplier', tone: 'ext' },
      { id: 'as2', x: 220, y: 95, w: 110, h: 64, label: 'AS2 adapter', sub: 'sign · encrypt · MDN', tone: 'hub' },
      { id: 'conv', x: 360, y: 95, w: 110, h: 64, label: 'EDI ⇄ XML', sub: 'X12 / EDIFACT', tone: 'hub' },
      { id: 'map', x: 495, y: 95, w: 110, h: 64, label: 'Mapping', sub: 'MIG / MAG', tone: 'hub' },
      { id: 'ia', x: 360, y: 180, w: 245, h: 44, label: 'Integration Advisor', sub: '', tone: 'hub' },
      { id: 's4', x: 680, y: 95, w: 160, h: 64, label: 'S/4HANA', sub: 'IDoc ORDERS / DESADV', tone: 'sap' },
    ],
    edges: [
      { from: 'tp', to: 'as2', label: 'EDI' },
      { from: 'as2', to: 'conv' },
      { from: 'conv', to: 'map' },
      { from: 'ia', to: 'map', dashed: true },
      { from: 'map', to: 's4', label: 'IDoc' },
    ],
  },
  'error-handling': {
    width: 860,
    height: 280,
    nodes: [
      { id: 'src', x: 20, y: 40, w: 130, h: 56, label: 'Source system', tone: 'ext' },
      { id: 'flow', x: 200, y: 40, w: 180, h: 56, label: 'Main iFlow', sub: 'validate · map · send', tone: 'hub' },
      { id: 'tgt', x: 440, y: 40, w: 130, h: 56, label: 'Target system', tone: 'sap' },
      { id: 'exc', x: 200, y: 160, w: 180, h: 60, label: 'Exception sub-process', sub: 'classify error', tone: 'warn' },
      { id: 'jms', x: 440, y: 130, w: 150, h: 50, label: 'JMS retry queue', tone: 'hub' },
      { id: 'store', x: 440, y: 205, w: 150, h: 50, label: 'Failed-message store', tone: 'hub' },
      { id: 'alert', x: 650, y: 130, w: 190, h: 50, label: 'Custom alert', sub: 'mail to support', tone: 'warn' },
      { id: 'dash', x: 650, y: 205, w: 190, h: 50, label: 'Monitoring dashboard', tone: 'sap' },
    ],
    edges: [
      { from: 'src', to: 'flow' },
      { from: 'flow', to: 'tgt' },
      { from: 'flow', to: 'exc', label: 'on error', dashed: true },
      { from: 'exc', to: 'jms', label: 'transient' },
      { from: 'exc', to: 'store', label: 'functional' },
      { from: 'jms', to: 'alert' },
      { from: 'store', to: 'dash' },
    ],
  },
  migration: {
    width: 860,
    height: 240,
    groups: [
      { x: 20, y: 20, w: 220, h: 200, label: 'BTP Neo (retiring)' },
      { x: 620, y: 20, w: 220, h: 200, label: 'BTP Cloud Foundry' },
    ],
    nodes: [
      { id: 'neo', x: 40, y: 60, w: 180, h: 56, label: 'Neo CPI tenant', sub: 'packages · iFlows', tone: 'sap' },
      { id: 'neosec', x: 40, y: 140, w: 180, h: 56, label: 'Security material', sub: 'keys · credentials', tone: 'sap' },
      { id: 'pm', x: 320, y: 60, w: 220, h: 56, label: 'Postman collections', sub: 'export → import via APIs', tone: 'hub' },
      { id: 'test', x: 320, y: 140, w: 220, h: 56, label: 'Regression testing', sub: 'Postman · SoapUI · Mendelson', tone: 'warn' },
      { id: 'cf', x: 640, y: 60, w: 180, h: 56, label: 'CF Integration Suite', tone: 'hub' },
      { id: 'cfsec', x: 640, y: 140, w: 180, h: 56, label: 'Cloud Connector + roles', tone: 'hub' },
    ],
    edges: [
      { from: 'neo', to: 'pm' },
      { from: 'pm', to: 'cf' },
      { from: 'neosec', to: 'test', dashed: true },
      { from: 'test', to: 'cfsec', label: 'sign-off' },
    ],
  },
};

function anchor(a: Node, b: Node) {
  const acx = a.x + a.w / 2, acy = a.y + a.h / 2;
  const bcx = b.x + b.w / 2, bcy = b.y + b.h / 2;
  if (b.x >= a.x + a.w - 4) return { x1: a.x + a.w, y1: acy, x2: b.x, y2: bcy };
  if (b.x + b.w <= a.x + 4) return { x1: a.x, y1: acy, x2: b.x + b.w, y2: bcy };
  if (bcy > acy) return { x1: acx, y1: a.y + a.h, x2: bcx, y2: b.y };
  return { x1: acx, y1: a.y, x2: bcx, y2: b.y + b.h };
}

export default function Diagram({ kind, title }: { kind: DiagramKey; title: string }) {
  const s = specs[kind];
  const byId = Object.fromEntries(s.nodes.map((n) => [n.id, n]));
  const markerId = `arrow-${kind}`;
  return (
    <svg className="diagram" viewBox={`0 0 ${s.width} ${s.height}`} role="img" aria-label={title}>
      <defs>
        <marker id={markerId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="d-arrowhead" />
        </marker>
      </defs>
      {s.groups?.map((g) => (
        <g key={g.label}>
          <rect x={g.x} y={g.y} width={g.w} height={g.h} rx={12} className="d-group" />
          <text x={g.x + 12} y={g.y + g.h - 10} className="d-group-label">{g.label}</text>
        </g>
      ))}
      {s.edges.map((e, i) => {
        const { x1, y1, x2, y2 } = anchor(byId[e.from], byId[e.to]);
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} className={e.dashed ? 'd-edge d-dashed' : 'd-edge'} markerEnd={`url(#${markerId})`} />
            {e.label && (
              <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 6} textAnchor="middle" className="d-edge-label">{e.label}</text>
            )}
          </g>
        );
      })}
      {s.nodes.map((n) => (
        <g key={n.id}>
          <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={8} className={`d-node d-${n.tone ?? 'hub'}`} />
          <text x={n.x + n.w / 2} y={n.y + n.h / 2 + (n.sub ? -3 : 5)} textAnchor="middle" className="d-label">{n.label}</text>
          {n.sub && (
            <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 14} textAnchor="middle" className="d-sub">{n.sub}</text>
          )}
        </g>
      ))}
    </svg>
  );
}
