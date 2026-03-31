/* ═══════════════════════════════════════════════════════════
   Static data for the IKUN-LLM website
   ═══════════════════════════════════════════════════════════ */

/* ── Features: numbered [00]-[03] tab section ── */
export const features = [
  {
    id: "00",
    title: "从分词器到预训练",
    description:
      "从 BPE 分词器训练开始，到完整的语言模型预训练。ikun-tokenizer 让你理解 subword 分词原理，ikun-pretrain 带你从零实现 causal LM 预训练，支持单卡 / DDP 多卡训练，全部 PyTorch 原生代码。",
    visual: `# ikun-tokenizer
from tokenizers import Tokenizer
tokenizer = Tokenizer(BPE())
tokenizer.train(files, trainer)

# ikun-pretrain
model = MiniMindForCausalLM(config)
for batch in dataloader:
    loss = model(input_ids, labels=labels).loss
    loss.backward()
    optimizer.step()`,
  },
  {
    id: "01",
    title: "对齐与优化",
    description:
      "人类偏好对齐是大模型的灵魂。ikun-DPO 从零实现直接偏好优化，ikun-GRPO 实现组相对策略优化（DeepSeek-R1 同款算法）。每个算法都手写损失函数，没有任何第三方训练框架依赖。",
    visual: `# ikun-DPO
loss = -log_sigmoid(beta * (
    log_ratio_chosen - log_ratio_rejected
))

# ikun-GRPO
advantages = (rewards - mean) / std
loss = -min(
    ratio * advantages,
    clip(ratio, 1-eps, 1+eps) * advantages
)`,
  },
  {
    id: "02",
    title: "推理与蒸馏",
    description:
      "ikun-Reason 训练推理模型，支持 <think>/<answer> 结构化思维链。ikun-Distill 实现白盒知识蒸馏，用 KL 散度从大模型迁移知识。ikun-MoE 实现 DeepSeek 风格的混合专家模型，含共享专家 + 路由专家 + 负载均衡。",
    visual: `# ikun-Reason
<think>
用户问的是篮球技术...
需要结合实战经验分析...
</think>
<answer>
练习时长两年半，建议从运球开始
</answer>

# ikun-MoE
experts = [Expert() for _ in range(n)]
gate = softmax(W_gate @ x)
output = sum(gate[i] * experts[i](x))`,
  },
  {
    id: "03",
    title: "多模态与部署",
    description:
      "ikun-V 从零实现视觉语言模型，支持图文理解。ikun-deploy 提供完整部署方案：OpenAI 兼容 API 服务、Streamlit Web 交互界面、HuggingFace Transformers 格式转换，以及 ollama / vllm 推理加速。",
    visual: `# ikun-V: Vision-Language Model
image_features = vision_encoder(image)
text_features = llm_embed(text)
fused = cross_attention(text_features, image_features)
output = llm_decode(fused)

# ikun-deploy
uvicorn serve_openai_api:app --port 8000
# OpenAI-compatible API ready!`,
  },
] as const;

/* ── Feature cards: horizontal scroll repos ── */
export const featureCards = [
  {
    emoji: "🐔",
    name: "ikun-2.5B",
    description: "练习时长两年半的 AI 大模型（实际 26M，2.5B = 两年半）",
    url: "https://github.com/ikun-llm/ikun-2.5B",
  },
  {
    emoji: "📖",
    name: "ikun-basics",
    description: "练习生的 AI 基础功课，小白也能听懂",
    url: "https://github.com/ikun-llm/ikun-basics",
  },
  {
    emoji: "🔤",
    name: "ikun-tokenizer",
    description: "从零训练 BPE 分词器，理解 subword 原理",
    url: "https://github.com/ikun-llm/ikun-tokenizer",
  },
  {
    emoji: "📚",
    name: "ikun-pretrain",
    description: "从零预训练语言模型，单卡 / DDP 多卡",
    url: "https://github.com/ikun-llm/ikun-pretrain",
  },
  {
    emoji: "👍",
    name: "ikun-DPO",
    description: "偏好对齐训练 Direct Preference Optimization",
    url: "https://github.com/ikun-llm/ikun-DPO",
  },
  {
    emoji: "🎮",
    name: "ikun-GRPO",
    description: "强化学习对齐 Group Relative Policy Optimization",
    url: "https://github.com/ikun-llm/ikun-GRPO",
  },
  {
    emoji: "🧠",
    name: "ikun-Reason",
    description: "推理模型训练，结构化思维链 chain-of-thought",
    url: "https://github.com/ikun-llm/ikun-Reason",
  },
  {
    emoji: "🧩",
    name: "ikun-MoE",
    description: "混合专家模型 Mixture of Experts",
    url: "https://github.com/ikun-llm/ikun-MoE",
  },
  {
    emoji: "🎓",
    name: "ikun-Distill",
    description: "知识蒸馏 Knowledge Distillation",
    url: "https://github.com/ikun-llm/ikun-Distill",
  },
  {
    emoji: "👁️",
    name: "ikun-V",
    description: "多模态视觉语言模型 Vision-Language Model",
    url: "https://github.com/ikun-llm/ikun-V",
  },
  {
    emoji: "🚀",
    name: "ikun-deploy",
    description: "模型部署 API / Web / ollama / vllm",
    url: "https://github.com/ikun-llm/ikun-deploy",
  },
  {
    emoji: "😂",
    name: "ikun 表情包",
    description: "IKUN 表情包大全，斗图必备",
    url: "https://github.com/ikun-llm/ikun",
  },
  {
    emoji: "🎵",
    name: "鸡乐盒",
    description: "鸡乐盒 Jilehe - 仅供娱乐",
    url: "https://github.com/ikun-llm/Jilehe",
  },
  {
    emoji: "🖱️",
    name: "ikun-mouse",
    description: "快来领养一只自己的桌面小坤坤",
    url: "https://github.com/ikun-llm/ikun-mouse",
  },
  {
    emoji: "🐥",
    name: "ikun-ui",
    description: "Vue3 + Vite 打造的 ikun 组件库",
    url: "https://github.com/ikun-llm/ikun-ui",
  },
] as const;

/* ── Testimonials: ikun meme reviews ── */
export const testimonials = [
  {
    quote: "ikun 的代码写得比我打篮球还丝滑",
    author: "小黑子A",
    avatar: "🏀",
  },
  {
    quote: "自从用了 ikun-2.5B，我的模型也学会了唱跳 Rap",
    author: "AI练习生",
    avatar: "🎤",
  },
  {
    quote: "练习时长两年半，终于把 Transformer 搞懂了",
    author: "坤坤学徒",
    avatar: "🐔",
  },
  {
    quote: "ikun-GRPO 的实现比 DeepSeek 论文还好读，太感动了",
    author: "强化学习摸鱼人",
    avatar: "🎮",
  },
  {
    quote: "在鸡乐盒里找到了人生的意义",
    author: "哲学家坤",
    avatar: "🎵",
  },
  {
    quote: "26M 参数就能对话，比我的篮球技术还高效",
    author: "参数精算师",
    avatar: "📊",
  },
  {
    quote: "ikun-tokenizer 让我理解了为什么 LLM 不会打篮球",
    author: "分词器研究员",
    avatar: "🔤",
  },
  {
    quote: "用 ikun-V 给坤坤照片做了图文理解，它说：鸡你太美",
    author: "多模态玩家",
    avatar: "👁️",
  },
  {
    quote: "DPO 对齐之后，模型终于学会了只说好听的话",
    author: "对齐工程师",
    avatar: "👍",
  },
  {
    quote: "ikun-MoE 的路由策略比我选外卖还智能",
    author: "专家路由器",
    avatar: "🧩",
  },
  {
    quote: "三块钱训了个大模型，比我买奶茶还便宜",
    author: "节俭练习生",
    avatar: "💰",
  },
  {
    quote: "ikun-deploy 一键部署，比我投三分球还准",
    author: "运维坤",
    avatar: "🚀",
  },
  {
    quote: "从零手写代码的快乐，只有 ikun 能懂",
    author: "原生代码爱好者",
    avatar: "💻",
  },
  {
    quote: "看完 ikun-basics 才知道，原来 AI 也需要练习两年半",
    author: "入门选手",
    avatar: "📖",
  },
] as const;

/* ── Trust: 3-column "Why IKUN" ── */
export const trustItems = [
  {
    emoji: "💡",
    title: "大道至简",
    description:
      "拒绝黑盒，每一行代码都从零手写，PyTorch 原生实现，无第三方训练抽象。你看到的就是全部，不藏一行 magic。",
  },
  {
    emoji: "🔗",
    title: "完整链路",
    description:
      "从 Tokenizer 到部署，覆盖 LLM 训练全链路，每个环节独立成库。预训练、SFT、DPO、GRPO、MoE、蒸馏、推理、多模态、部署一应俱全。",
  },
  {
    emoji: "🌍",
    title: "社区驱动",
    description:
      "20+ 开源仓库，活跃的 ikun 社区。HuggingFace 模型一站式获取，Bilibili 视频教程同步更新，微信群实时交流。",
  },
] as const;

/* ── Community links ── */
export const communityLinks = [
  {
    icon: "🤗",
    name: "HuggingFace",
    url: "https://huggingface.co/IKUN-LLM",
  },
  {
    icon: "💻",
    name: "GitHub",
    url: "https://github.com/ikun-llm",
  },
  {
    icon: "🎬",
    name: "Bilibili",
    url: "https://www.bilibili.com/video/BV12dHPeqE72/",
  },
  {
    icon: "📱",
    name: "微信社群",
    url: "#",
  },
] as const;

/* ── Footer links ── */
export const footerLinks = {
  projects: [
    { label: "ikun-2.5B", url: "https://github.com/ikun-llm/ikun-2.5B" },
    { label: "ikun-pretrain", url: "https://github.com/ikun-llm/ikun-pretrain" },
    { label: "ikun-GRPO", url: "https://github.com/ikun-llm/ikun-GRPO" },
    { label: "ikun-Reason", url: "https://github.com/ikun-llm/ikun-Reason" },
    { label: "ikun-MoE", url: "https://github.com/ikun-llm/ikun-MoE" },
    { label: "ikun-V", url: "https://github.com/ikun-llm/ikun-V" },
  ],
  resources: [
    { label: "HuggingFace", url: "https://huggingface.co/IKUN-LLM" },
    { label: "GitHub", url: "https://github.com/ikun-llm" },
    { label: "Bilibili", url: "https://www.bilibili.com/video/BV12dHPeqE72/" },
    { label: "ikun-basics", url: "https://github.com/ikun-llm/ikun-basics" },
  ],
  community: [
    { label: "微信交流群", url: "#" },
    { label: "GitHub Discussions", url: "https://github.com/ikun-llm/ikun-2.5B/discussions" },
    { label: "Issues", url: "https://github.com/ikun-llm/ikun-2.5B/issues" },
  ],
} as const;
