"use client";

import { motion } from "framer-motion";

const codeSnippet = `import torch
from model import MiniMindForCausalLM, MiniMindConfig

# 26M params - 从零开始训练
config = MiniMindConfig(
    hidden_size=512,
    num_hidden_layers=8,
    num_attention_heads=8,
    num_key_value_heads=2,   # GQA
    vocab_size=6400,
)

model = MiniMindForCausalLM(config)
optimizer = torch.optim.AdamW(model.parameters(), lr=5e-4)

# 预训练循环
for epoch in range(epochs):
    for batch in dataloader:
        loss = model(
            input_ids=batch["input_ids"],
            labels=batch["labels"],
        ).loss
        loss.backward()
        optimizer.step()
        optimizer.zero_grad()

print("练习时长两年半，模型训练完成! 🐔")`;

export default function Showcase() {
  return (
    <section id="about" className="t-section">
      <div className="t-container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-accent border border-accent/20 rounded-full tracking-wide uppercase">
            ikun-2.5B
          </span>

          <h2
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            练习生的全能大模型
          </h2>

          <p className="text-text-2 text-lg max-w-xl mx-auto">
            26M 参数，从零手写，PyTorch 原生实现
          </p>

          <a
            href="https://github.com/ikun-llm/ikun-2.5B"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent-hover transition-colors duration-200 text-sm font-medium"
          >
            探索 GitHub
            <span>→</span>
          </a>
        </motion.div>

        {/* Code showcase card */}
        <motion.div
          className="t-card overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Fake window bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-line">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-4 text-xs text-text-3 font-mono">
              train_pretrain.py
            </span>
          </div>
          <pre className="p-6 md:p-8 overflow-x-auto text-sm leading-relaxed text-text-2 font-mono">
            <code>{codeSnippet}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
