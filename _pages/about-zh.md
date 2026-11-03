---
permalink: /zh/
title: "秦嘉俊"
author_profile: true
lang: zh-CN
language_switch: /
author_name: "秦嘉俊"
author_bio: "香港中文大学计算机科学与工程系博士生"
author_location: "中国香港"
author_employer: "香港中文大学"
description: "秦嘉俊，香港中文大学计算机科学与工程系博士生，研究 AI 加速的软硬件协同设计，兼顾效率与灵活性。"
---

我是**秦嘉俊（Jiajun Qin）**，2025 年秋季入读**香港中文大学（CUHK）计算机科学与工程系**，目前是博士二年级学生，导师为 [Bei Yu 教授](https://www.cse.cuhk.edu.hk/~byu/index.html)。我本科就读于**浙江大学图灵班**，于 2025 年毕业。

欢迎与我讨论研究合作或实习机会，也欢迎交流感兴趣的问题。可以通过 [hobbitqia@gmail.com](mailto:hobbitqia@gmail.com) 联系我！

<details class="research-overview">
  <summary>研究概述</summary>
  <div class="research-overview__body">
    <p>我的研究聚焦于<strong>AI 加速的软硬件协同设计，兼顾效率与灵活性</strong>。加速器需要通过专用设计提高效率，也需要适应 AI 模型的快速变化。这要求将算法、编译器和架构放在一起考虑。我的工作主要围绕三个方面展开：算法与执行硬件的协同设计、编译器与可重构架构的协同设计，以及加速器与系统的集成。</p>
    <section class="research-overview__group research-overview__group--algorithms">
      <p class="research-overview__heading"><strong>1. 面向新型 AI 负载的算法与硬件设计</strong></p>
      <p>我针对大语言模型中的非线性算子，协同设计近似算法与硬件。这类算子的推理开销不断增加，也随着模型演进而变化，因此需要同时考虑执行效率和适应性。</p>
      <ul>
        <li><strong>HAAN</strong> <em>（DATE 2025）</em>用相邻层间的统计量预测代替重复计算，并围绕这种预测方式设计硬件，以加速归一化。</li>
        <li><strong>PICACHU</strong> <em>（ASPLOS 2025）</em>将这一思路扩展到大语言模型中的全部非线性算子：围绕这些算子共有的基本运算设计算法，结合异构粗粒度可重构阵列（CGRA），由编译器完成算子到硬件的映射。</li>
      </ul>
    </section>
    <section class="research-overview__group research-overview__group--compilers">
      <p class="research-overview__heading"><strong>2. 面向可重构阵列的编译器与架构设计</strong></p>
      <p>我将编译器与可重构架构一起设计，为映射方法提供相应的硬件支持，并根据工作负载自动定制硬件。</p>
      <ul>
        <li><strong>FLAME</strong> <em>（DATE 2026）</em>将操作延迟纳入映射约束，为多周期操作提供三种执行策略，并设计各自所需的硬件支持。</li>
        <li><strong>NUKE</strong> <em>（ICCAD 2026）</em>利用 e-graph 联合探索代数重写与模式融合方案，从工作负载中自动推导 CGRA 所需的硬件模式，实现模式融合自动化。</li>
        <li><strong>Aether</strong> <em>（HPCA 2027）</em>通过内核级与模式级的协同融合定制 CGRA，并为这些编译优化设计配套的多周期执行硬件支持。</li>
      </ul>
    </section>
    <section class="research-overview__group research-overview__group--systems">
      <p class="research-overview__heading"><strong>3. 加速器的系统集成</strong> <em>（进行中）</em></p>
      <p>我将可重构阵列集成到异构 SoC 中，开发支持整个模型以 megakernel 形式执行的编程模型和编译器，让单个计算内核的加速收益体现在完整应用中。</p>
    </section>
  </div>
</details>

## 最新动态

<div class="news-box" markdown="1">

*我将参加在圣何塞举行的 **ICCAD 2026**（11 月 9–11 日），以及在香港举行的 **ICCD 2026 学生研究论坛**（11 月 16–18 日）。欢迎联系我，见面交流！*
{: .conference-plans}

* <span class="news-date">2026 年 11 月：</span>我们的论文 **Aether** 被 **HPCA 2027** 接收！
* <span class="news-date">2026 年 7 月：</span>我们的论文 **NUKE** 被 **ICCAD 2026** 接收！
* <span class="news-date">2026 年 4 月：</span>我在意大利维罗纳举行的 **DATE 2026**（4 月 20–22 日）上报告了 **FLAME**（<button type="button" class="news-photo image-popup" data-mfp-src="{{ '/images/date26.jpg' | relative_url }}" aria-label="查看 DATE 2026 会议照片" aria-haspopup="dialog">照片</button>）。
* <span class="news-date">2025 年 11 月：</span>我们的论文 **FLAME** 和 **MAEDA** 被 **DATE 2026** 接收！
* <span class="news-date">2025 年 6 月：</span>我从浙江大学图灵班毕业，获得计算机科学与技术学士学位（<button type="button" class="news-photo image-popup" data-mfp-src="{{ '/images/me.jpg' | relative_url }}" aria-label="查看毕业照片" aria-haspopup="dialog">照片</button>）。
* <span class="news-date">2025 年 4 月：</span>我在荷兰鹿特丹举行的 **ASPLOS 2025**（3 月 30 日至 4 月 3 日）上报告了 **PICACHU**（[视频](https://b23.tv/ObIuEgK)）。
* <span class="news-date">2025 年 2 月：</span>我们的论文 **PICACHU** 被 **ASPLOS 2025** 接收！

</div>

## 代表性论文

[查看完整论文列表]({{ '/zh/publications/' | relative_url }})。

{% include selected-publications.md %}

## 教育经历

- **香港中文大学**
  - 计算机科学与工程博士研究生，2025 年 8 月至今

- **浙江大学**
  - 计算机科学与技术学士，2021 年 9 月至 2025 年 6 月
  - 竺可桢学院图灵班

## 实习与研究经历

- **中国移动（香港）创新研究院**，中国香港
  - 博士实习生，2026 年 4 月至 8 月
  - 方向：AI 辅助开发

- **ChatEDA Technology Co., Ltd**，中国深圳
  - 研究实习生，2025 年 5 月至 2026 年 3 月
  - 方向：面向 EDA 的大语言模型

- **[SAI Lab](https://saiqianzhang.com/Lab/)**，纽约大学
  - 远程研究实习生，2024 年 3 月至 10 月
  - 导师：[Sai Qian Zhang 教授](https://saiqianzhang.com/)
  - 合作者：[Cheng Tan 博士](https://tancheng.github.io/)和 [Jeff Zhang 教授](https://search.asu.edu/profile/4346755)
  - 方向：面向大语言模型的软硬件协同设计与可重构加速器

- **[RC4ML](https://github.com/RC4ML)**，浙江大学
  - 研究实习生，2023 年 8 月至 2024 年 9 月
  - 导师：[Jie Zhang 教授](https://carlzhang4.github.io)和 [Zeke Wang 教授](https://wangzeke.github.io/)
  - 方向：基于 FPGA 的智能网卡

## 学术服务

* **期刊审稿人**：IEEE TCAD
* **Artifact 评估委员会**：ASPLOS 2027、MICRO 2026
* **外部审稿人**：FPL 2026
* **协助审稿**：EuroSys 2027、HPCA 2027、ASP-DAC 2026、ICCAD 2026、NeurIPS 2025、DAC 2025

## 荣誉与奖励

* 浙江省政府奖学金，2022、2023、2024 年
* 华为精英奖学金，2023 年
* 全国大学生计算机系统能力大赛三等奖，2023 年
* CSP-S 2019 二等奖

## 助教经历

香港中文大学：

* ENGG1110 程序设计与问题求解，任课教师：[Calvin Kam 博士](https://www.calvinkam.science)，2026 年秋季

浙江大学：

* CS1029M 计算系统概论，任课教师：[Yale Patt 教授](https://users.ece.utexas.edu/~patt/)和 [Xiaohong Jiang 教授](https://users.ece.utexas.edu/~patt/)，2023 年夏季
* CS2056M [计算机组成与设计](https://guahao31.github.io/2023_CO/)，任课教师：[Haifeng Liu 教授](https://mypage.zju.edu.cn/hfliu)，2024 年春夏学期
* CS1028M [计算机系统Ⅰ](https://git.zju.edu.cn/zju-sys/sys1/sys1-sp24)，任课教师：[Li Lu 教授](https://mypage.zju.edu.cn/hfliu)和 Haoting Shen 教授，2024 年春夏学期
* CS2051M [计算机体系结构](https://zju-arch.pages.zjusct.io/arch-fa24)，任课教师：[Rui Chang 教授](https://person.zju.edu.cn/en/0019220)，2024 年秋冬学期
* CS3125M 汇编与接口，任课教师：[Ming Cai 教授](https://person.zju.edu.cn/en/0002444)，2024 年秋冬学期
* CS1001G C 程序设计基础与实验，2024 年秋冬学期
* CS1028M [计算机系统Ⅰ](https://git.zju.edu.cn/zju-sys/sys1/sys1-sp25)，任课教师：[Haifeng Liu 教授](https://mypage.zju.edu.cn/hfliu)，2025 年春夏学期
* CS1019F [数字逻辑设计](https://guahao31.github.io/2025_DD/)，任课教师：[Ming Cai 教授](https://person.zju.edu.cn/en/0002444)，2025 年春夏学期

## 技能

* **编程语言**：C/C++、Verilog、Chisel、Python、Rust
* **工具**：PyTorch、LLVM、Vivado、LaTeX、PyMTL
