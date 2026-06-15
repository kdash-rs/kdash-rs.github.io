// Feature cards in the Features grid. Each `accent` is a Catppuccin token
// name (without the `catppuccin-` prefix) so the icon container can color
// itself consistently with the palette.

export interface Feature {
  title: string;
  body: string;
  accent:
    | "mauve"
    | "blue"
    | "green"
    | "peach"
    | "yellow"
    | "teal"
    | "sky"
    | "lavender";
}

export const features: Feature[] = [
  {
    title: "Resource management actions",
    body: "Delete, edit in `$EDITOR`, scale, rollout restart, cordon nodes, and manage CronJobs from an action menu (`m`), or shell straight into a container. Impactful changes are guarded by a confirmation prompt.",
    accent: "mauve",
  },
  {
    title: "Browse every resource",
    body: "Pods, deployments, nodes, configmaps, jobs, events, and CRDs in a tabbed, keyboard-driven view with live resource watch. Drill from workloads to pods to containers, filter any view with `/`, and reveal every column with `w`.",
    accent: "green",
  },
  {
    title: "Logs, describe, and YAML",
    body: "Stream container logs with timestamp and line-wrap toggles, aggregate logs across a workload's pods, and describe or pull YAML for any resource with copy to clipboard.",
    accent: "blue",
  },
  {
    title: "Port-forward without leaving",
    body: "Forward a Pod or Service with `f`, then list and stop active forwards with `Shift+F`. Forwards run in the background and stop cleanly when you quit.",
    accent: "peach",
  },
  {
    title: "Cluster metrics and utilization",
    body: "Node, pod, and namespace utilization from metrics-server, with grouping and a cluster summary pane. CLI info shows local tool versions at a glance.",
    accent: "yellow",
  },
  {
    title: "Troubleshoot and switch fast",
    body: "Severity-ranked findings for Pods, PVCs, and ReplicaSets with drill-down, plus live context and namespace switching as your kubeconfig changes.",
    accent: "teal",
  },
];
