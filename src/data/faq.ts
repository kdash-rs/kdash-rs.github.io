// FAQ accordion content. Keep questions short; answers in 1-3 short paragraphs.
// Edits land directly here — Faq.astro just iterates over this array.

export interface FaqEntry {
  q: string;
  a: string;
}

export const faq: FaqEntry[] = [
  {
    q: "What is KDash?",
    a: "A fast, simple terminal dashboard for Kubernetes, built in Rust with ratatui and the kube-rs client. It gives you a keyboard-driven view of your cluster (pods, nodes, workloads, events, and more) plus common resource actions, without leaving the terminal.",
  },
  {
    q: "Can it change resources, or just view them?",
    a: "Both. As of 2.0, KDash can act: delete, edit in your $EDITOR, scale, rollout restart, cordon and uncordon nodes, suspend/resume/trigger CronJobs, and port-forward. Everything runs from an action menu (m), with confirmation prompts on impactful changes.",
  },
  {
    q: "What platforms does it support?",
    a: "macOS (x86_64, arm64), Linux GNU and MUSL (x86_64, armv6, armv7, aarch64), and Windows (x86_64, aarch64). Prebuilt binaries are on the releases page, plus a one-line install script (curl | sh, or irm | iex on Windows) and installers for Homebrew, the AUR, Scoop, Chocolatey, Cargo, Nix, and Docker.",
  },
  {
    q: "Do I need kubectl or anything else?",
    a: "KDash uses your existing kubeconfig and contexts. Some views shell out to kubectl (describe, top), so having it on your PATH helps, and the utilization view needs metrics-server deployed on the cluster.",
  },
  {
    q: "Can I customize it?",
    a: "Yes. KDash supports config-based keybinding and theme overrides, ships five built-in themes you can cycle at runtime (t / Alt+t), and lets you tune the initial log history fetched before live streaming.",
  },
  {
    q: "Is it open source?",
    a: "Yes, MIT licensed. Source at github.com/kdash-rs/kdash. Issues and PRs welcome.",
  },
];
