---
permalink: /
title: "Jiajun Qin"
author_profile: true
lang: en
language_switch: /zh/
redirect_from: 
  - /about/
  - /about.html
---

I am **Jiajun Qin** (秦嘉俊 in Chinese), a second-year PhD student at the Department of Computer Science and Engineering, **The Chinese University of Hong Kong (CUHK)** since 2025 Fall, advised by [Prof.Bei Yu](https://www.cse.cuhk.edu.hk/~byu/index.html). Prior to that, I graduated from **Zhejiang University (Turing Honors Class)** in 2025.

<!-- Prior to that, I graduated from Zhejiang University in 2025. I had the privilege to complete a research internship at NYU SAI Lab under the supervision of [Prof.Sai Qian Zhang](https://saiqianzhang.com/). I was also fortunate to collaborate with [Prof.Cheng Tan](https://tancheng.github.io/) from Google and [Prof.Jeff Zhang](https://search.asu.edu/profile/4346755) from ASU. Prior to this, I greatly appreciated the mentorship of [Prof.Zeke Wang](https://wangzeke.github.io/) at RC4ML at ZJU. -->

<!-- I am Jiajun Qin (秦嘉俊 in Chinese), a final-year undergraduate majoring in Computer Science and Technology at Chu Kochen Honors College, Zhejiang University. I am expected to graduate in 2025. I had the privilege to complete a research internship at NYU SAI Lab under the supervision of [Prof.Sai Qian Zhang](https://saiqianzhang.com/). I was also fortunate to collaborate with [Prof.Cheng Tan](https://tancheng.github.io/) from Google and [Prof.Jeff Zhang](https://search.asu.edu/profile/4346755) from ASU. Prior to this, I greatly appreciated the mentorship of [Prof.Zeke Wang](https://wangzeke.github.io/) at RC4ML at ZJU. -->

<!-- I will join The Chinese University of Hong Kong as a CSE PhD student, advised by [Prof.Bei Yu](https://www.cse.cuhk.edu.hk/~byu/index.html), starting from 2025 Fall. -->

I am open to research collaborations and internship opportunities. If you are interested in working together or discussing potential projects, feel free to contact me at [hobbitqia@gmail.com]()!

<details class="research-overview">
  <summary>Research Overview</summary>
  <div class="research-overview__body">
    <p>My research is on <strong>hardware/software co-design for efficient and adaptable AI acceleration</strong>. An AI accelerator must be specialized enough to be efficient and adaptable enough to follow rapidly evolving models, and meeting both demands requires decisions that cut across the stack rather than within a single layer. My work therefore targets three interfaces of the stack: between algorithms and the hardware that executes them, between the compiler and a reconfigurable architecture, and between the accelerator and the system around it.</p>
    <section class="research-overview__group research-overview__group--algorithms">
      <p class="research-overview__heading"><strong>1. Algorithms and hardware for emerging AI workloads.</strong></p>
      <p>I co-design approximations and hardware for LLM nonlinear operators, whose growing inference cost and rapid evolution demand both efficiency and adaptability.</p>
      <ul>
        <li><strong>HAAN</strong> <em>(DATE 2025)</em> accelerates normalization by predicting statistics across adjacent layers instead of recomputing them, with hardware built around this prediction.</li>
        <li><strong>PICACHU</strong> <em>(ASPLOS 2025)</em> generalizes this to all nonlinear operators in LLMs by combining algorithms for their shared primitives with a heterogeneous CGRA and a compiler that maps any such operator onto it.</li>
      </ul>
    </section>
    <section class="research-overview__group research-overview__group--compilers">
      <p class="research-overview__heading"><strong>2. Compilers and architectures for reconfigurable fabrics.</strong></p>
      <p>I develop compilers and reconfigurable architectures together, pairing mapping techniques with hardware support and automating workload-driven hardware customization.</p>
      <ul>
        <li><strong>FLAME</strong> <em>(DATE 2026)</em> treats operation latency as a mapping constraint and pairs three execution strategies for multi-cycle operations with the hardware support each requires.</li>
        <li><strong>NUKE</strong> <em>(ICCAD 2026)</em> automates pattern fusion: with e-graphs, algebraic rewrites and fusion decisions are explored jointly, so the hardware patterns a CGRA should provide are derived from the workload rather than extracted by hand.</li>
        <li><strong>Aether</strong> <em>(HPCA 2027)</em> customizes CGRAs through coordinated kernel-level and pattern-level fusion, co-designing these compiler optimizations with hardware support for multi-cycle execution.</li>
      </ul>
    </section>
    <section class="research-overview__group research-overview__group--systems">
      <p class="research-overview__heading"><strong>3. Accelerators in complete systems</strong> <em>(ongoing).</em></p>
      <p>I integrate reconfigurable fabrics into heterogeneous SoCs and develop programming models and compilers for whole-model megakernels, extending kernel-level gains to complete applications.</p>
    </section>
  </div>
</details>

## News

<div class="news-box" markdown="1">

*I will attend **ICCAD 2026** in San Jose (Nov 9–11) and **ICCD 2026 Student Research Forum** in Hong Kong (Nov 16–18). Feel free to reach out if you'd like to meet and discuss!*
{: .conference-plans}

* <span class="news-date">Nov/2026:</span> Our paper **Aether** has been accepted to **HPCA 2027**!
* <span class="news-date">Jul/2026:</span> Our paper **NUKE** has been accepted to **ICCAD 2026**!
* <span class="news-date">Apr/2026:</span> I presented **FLAME** at **DATE 2026** in Verona, Italy (Apr 20–22). (<button type="button" class="news-photo image-popup" data-mfp-src="{{ '/images/date26.jpg' | relative_url }}" aria-label="View my graduation photo" aria-haspopup="dialog">photo</button>).
* <span class="news-date">Nov/2025:</span> Our papers **FLAME** and **MAEDA** have been accepted to **DATE 2026**!
* <span class="news-date">Jun/2025:</span> I graduated from Zhejiang University, completing my B.Eng. in Computer Science and Technology in the Turing Honors Class (<button type="button" class="news-photo image-popup" data-mfp-src="{{ '/images/me.jpg' | relative_url }}" aria-label="View my graduation photo" aria-haspopup="dialog">photo</button>).
* <span class="news-date">Apr/2025:</span> I presented **PICACHU** at **ASPLOS 2025** in Rotterdam, the Netherlands (Mar 30–Apr 3) ([video](https://b23.tv/ObIuEgK)).
* <span class="news-date">Feb/2025:</span> Our paper **PICACHU** has been accepted to **ASPLOS 2025**!

</div>

## Selected Publications

For a completed list of publications, see [this](https://hobbitqia.cc/publications/).

{% include selected-publications.md %}

## Education

- **The Chinese University of Hong Kong**
  - Ph.D. in Computer Science and Engineering, 2025.8 - Now

- **Zhejiang University**
  - B.Eng. in Computer Science and Technology, 2021.9 - 2025.6
  - Turing Class, Chu Kochen Honors College

## Experiences

- China Mobile (Hong Kong) Innovation Research Institute, Hong Kong SAR, China
  - PhD Intern, 2026.04 - 2026.08
  - Topic: AI-assisted Development

- ChatEDA Technology Co., Ltd, Shenzhen, China
  - Research Intern, 2025.05 - 2026.03
  - Topic: LLM for EDA

- **[SAI Lab](https://saiqianzhang.com/Lab/)**, New York University
  - Remote Research Intern, 2024.3 - 2024.10
  - Supervisor: [Prof. Sai Qian Zhang](https://saiqianzhang.com/)
  - Collaborator: [Dr. Cheng Tan](https://tancheng.github.io/) and [Prof. Jeff Zhang](https://search.asu.edu/profile/4346755)
  - Topic: SW/HW Co-Design and Reconfigurable Accelerator for LLMs

- **[RC4ML](https://github.com/RC4ML)**, Zhejiang University  
  - Research Intern, 2023.8 - 2024.9
  - Supervisor: [Prof. Jie Zhang](https://carlzhang4.github.io) and [Prof. Zeke Wang](https://wangzeke.github.io/)
  - Topic: FPGA-based SmartNIC

## Academic Services

* **Journal Reviewer**: IEEE TCAD
* **Artifact Evaluation Committee**: ASPLOS 2027, MICRO 2026
* **External Reviewer**: FPL 2026
* **Secondary Reviewer**: EuroSys 2027, HPCA 2027, ASP-DAC 2026, ICCAD 2026, NeurIPS 2025, DAC 2025

## Selected Honors & Awards

* Zhejiang Government Scholarship, 2022, 2023, 2024
* Huawei Elite Scholarship, 2023
* Third Prize in National Student Computer System Capability Challenge, 2023
* Second Prize in CSP-S 2019

## Teaching Assistants

At The Chinese University of Hong KOng:

* ENGG1110 - Problem Solving By Programming with [Dr.Calvin Kam](https://www.calvinkam.science), 2026 Fall

At Zhejiang University:

* CS1029M - Introduction to Computing Systems with [Prof.Yale Patt](https://users.ece.utexas.edu/~patt/) and [Prof.Xiaohong Jiang](https://users.ece.utexas.edu/~patt/), 2023 Summer
* CS2056M - [Computer Organization and Design](https://guahao31.github.io/2023_CO/), with [Prof.Haifeng Liu](https://mypage.zju.edu.cn/hfliu), 2024 Spring & Summer
* CS1028M - [Computer SystemⅠ](https://git.zju.edu.cn/zju-sys/sys1/sys1-sp24), with [Prof.Li Lu](https://mypage.zju.edu.cn/hfliu) and Prof.Haoting Shen, 2024 Spring & Summer
* CS2051M - [Computer Architecture](https://zju-arch.pages.zjusct.io/arch-fa24), with [Prof.Rui Chang](https://person.zju.edu.cn/en/0019220), 2024 Fall & Winter
* CS3125M - Assembly Language And Microcomputer Interface, with [Prof.Ming Cai](https://person.zju.edu.cn/en/0002444), 2024 Fall & Winter
* CS1001G - Lab. & Fundamentals of C Programming, 2024 Fall & Winter
* CS1028M - [Computer System Ⅰ](https://git.zju.edu.cn/zju-sys/sys1/sys1-sp25), with [Prof.Haifeng Liu](https://mypage.zju.edu.cn/hfliu), 2025 Spring & Summer
* CS1019F - [Digital Logic and Design](https://guahao31.github.io/2025_DD/), with [Prof.Ming Cai](https://person.zju.edu.cn/en/0002444), 2025 Spring & Summer

## Skills

* **Programming Languages**: C/C++, Verilog, Chisel, Python, Rust
* **Tools**: Pytorch, LLVM, Vivado, LaTeX, Pymtl
