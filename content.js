window.DEBATE = [
  {
    id: 'reward', title: ['奖励与真实动机', 'Rewards and motivation'], short: ['奖励推断存在歧义', 'Reward inference is ambiguous'],
    concept: ['Area 5 · 奖励函数与策略', 'Area 5 · Reward functions and policies'],
    zh: '我们组首先质疑：模型里的奖励，是否真的是人类行动的原因？Area 5 告诉我们，改变奖励就会改变策略。但是，如果根据一个人已经作出的选择，再反过来设定奖励，就可能只是事后解释。Armstrong 和 Mindermann 的研究表明，当规划机制未知时，仅凭行为，不能唯一确定奖励与规划机制的组合。因此，一个 RL 模型即使拟合了选择，也不代表它找到了人的真实动机。我们需要独立证据检验这些假设。',
    en: 'Our first concern is whether the model’s reward represents the person’s actual motivation. Area 5 shows that changing rewards changes policies. However, choosing rewards after observing someone’s behaviour risks explaining the result after the fact. Armstrong and Mindermann show that, when the planning mechanism is unknown, behaviour alone cannot uniquely identify the combination of rewards and planning. Therefore, fitting someone’s choices does not establish their true motivation. Those assumptions need independent evidence.',
    opponent: ['我们可以用逆强化学习，从行为中学出奖励。', 'We can use inverse reinforcement learning to learn rewards from behaviour.'],
    rebuttal: ['逆强化学习提供了方法，但没有自动消除歧义。你们如何证明推断出的奖励是真实动机，而不是另一组同样能解释行为的假设？', 'Inverse reinforcement learning offers a method, but does not automatically remove ambiguity. What independently validates your inferred reward?'],
    boundary: ['这是在规划机制未知等条件下的可识别性限制，不是证明人类目标无法用奖励表示。', 'This is an identifiability limitation under unknown planning, not proof that rewards cannot represent human goals.'],
    authors: 'Armstrong, S., & Mindermann, S.', year: '2018', journal: 'NeurIPS', paper: 'Occam’s razor is insufficient to infer the preferences of irrational agents', url: 'https://arxiv.org/abs/1712.05812', evidence: ['理论研究 · 原始摘要已用 Jev 核验', 'Theoretical result · Original abstract checked with Jev']
  },
  {
    id: 'memory', title: ['价值之外的记忆', 'Memory beyond values'], short: ['简单价值表遗漏历史信息', 'Simple values can miss history'],
    concept: ['Area 5 · 状态、Markov 性与 Q 值', 'Area 5 · States, Markov property and Q-values'],
    zh: '我们的第二个观点是，人类使用的记忆可能比简单价值表丰富得多。Eckstein 等人在 2026 年的研究中发现，在预测未参与训练者的选择时，研究测试的最佳经典 RL 模型准确率为 60.6%，循环神经网络为 68.3%。研究进一步指出，更丰富、独立的记忆变量很重要。因此，把历史经历压缩成少量逐步更新的价值，可能丢失影响决策的信息。这个结果针对研究测试的模型和任务，但足以挑战简单价值更新的充分性。',
    en: 'Our second point concerns memory. Humans may retain much more than a small set of action values. In a 2026 study, Eckstein and colleagues found that their best classic RL model predicted 60.6 percent of unseen participants’ choices, compared with 68.3 percent for a recurrent neural network. Their analysis highlighted the importance of richer, independent memory variables. This challenges the sufficiency of simple value updating in that task, although it does not reject every possible RL model.',
    opponent: ['RL 也可以加入记忆或循环网络。', 'RL can also incorporate memory or recurrent networks.'],
    rebuttal: ['我们同意。我们的批评针对简单价值更新模型。加入记忆之后，仍需要检验具体记忆机制是否符合人类，而不能只凭它属于 RL 就认定合适。', 'We agree. But the added memory mechanism still needs validation against human behaviour. Calling the model RL does not provide that validation.'],
    boundary: ['862 位参与者符合纳入标准；60.6% 与 68.3% 是未参与训练者的选择预测结果。摘要由 Jev 核验，数值另经正文核对。', '862 participants met inclusion criteria. The percentages concern held-out human choices. Jev checked the abstract; numerical results were independently checked in the full text.'],
    authors: 'Eckstein, M. K., Summerfield, C., Daw, N. D., & Miller, K. J.', year: '2026', journal: 'Nature Human Behaviour, 10, 972–987', paper: 'Hybrid neural–cognitive models reveal how memory shapes human reward learning', url: 'https://www.nature.com/articles/s41562-025-02324-0', evidence: ['人类行为研究 · 原始摘要与正文', 'Human behaviour study · Abstract and full text']
  },
  {
    id: 'understanding', title: ['任务理解与推理', 'Task understanding'], short: ['理解错误可能被误判为 RL', 'Misunderstanding can mimic RL'],
    concept: ['Area 5 · Q-learning 与 model-free 学习', 'Area 5 · Q-learning and model-free learning'],
    zh: '我们的第三个观点是，决策取决于一个人如何理解任务。Feher da Silva 和 Hare 在 2020 年发现，更详细的任务说明，使参与者更多采用基于模型的选择。研究还发现，纯粹基于模型的决策者，如果误解了任务，也可能表现得像同时受到 model-free 学习影响。因此，看见某种选择模式，不足以断定它来自简单奖惩更新。模型必须区分：一个人在学习奖励，还是在使用一个错误的任务理解。',
    en: 'Our third point is that decisions depend on how people understand the task. Feher da Silva and Hare found that detailed instructions led participants to make primarily model-based choices. They also showed that model-based agents with incorrect task models could appear to show model-free influences. Therefore, an observed choice pattern does not uniquely establish simple reward updating. A suitable explanation must distinguish learning from rewards from acting on a mistaken understanding of the task.',
    opponent: ['这证明 model-based RL 可以解释人类。', 'This shows that model-based RL can explain humans.'],
    rebuttal: ['它支持模型推理的重要性，但也说明简单分类可能误判机制。你们需要解释人如何形成任务理解，以及误解如何产生，而不只是事后选择一个模型标签。', 'It supports model-based reasoning, but also exposes possible misclassification. How does your model explain the formation of correct and incorrect task beliefs?'],
    boundary: ['结论来自特定 two-stage task。它质疑简单 model-free 归因，不能用来否定所有 model-based RL。', 'The finding concerns a specific two-stage task. It challenges simple model-free attribution, not every model-based RL account.'],
    authors: 'Feher da Silva, C., & Hare, T. A.', year: '2020', journal: 'Nature Human Behaviour, 4, 1053–1066', paper: 'Humans primarily use model-based inference in the two-stage task', url: 'https://pubmed.ncbi.nlm.nih.gov/32632333/', evidence: ['任务说明实验 · 原始摘要已用 Jev 核验', 'Instruction experiment · Original abstract checked with Jev']
  },
  {
    id: 'exploration', title: ['有目的的信息探索', 'Information seeking'], short: ['探索不只是随机尝试', 'Exploration is more than chance'],
    concept: ['Area 5 · 探索与利用、ε-greedy', 'Area 5 · Exploration, exploitation and epsilon-greedy'],
    zh: '我们的第四个观点是，人类探索不仅包含随机尝试，也包含有目的的信息搜寻。Wilson 等人在 2014 年的实验中发现，当未来还有更多次选择机会时，参与者既更倾向于寻找信息，也表现出更高的选择随机性。这说明两种探索机制可以同时存在。Area 5 的 ε-greedy 随机分支可以产生尝试，却没有单独解释为什么一个人专门选择信息价值更高的选项。因此，单纯随机探索不足以解释实验观察到的人类探索行为。',
    en: 'Our fourth point concerns exploration. Human exploration includes both random variation and deliberate information seeking. Wilson and colleagues found that, when participants had more future choices available, they became both more information seeking and more variable in their choices. These are distinct contributions. The random branch of epsilon-greedy can generate exploration, but does not by itself explain a preference for informative options. Therefore, random exploration alone is insufficient to explain the human behaviour observed in this experiment.',
    opponent: ['给信息增加奖励，RL 就能解释了。', 'RL can explain this by adding an information reward.'],
    rebuttal: ['这是一个可以检验的扩展，但你们还需要说明信息奖励如何确定，以及它能否预测新的选择。能够加入某种机制，不等于该机制已经得到验证。', 'That is a testable extension. But how is the information reward determined, and does it predict new choices?'],
    boundary: ['这支持定向与随机探索并存，反驳的是单纯随机探索规则，不是所有 RL 探索算法。', 'This supports both directed and random exploration. It challenges a purely random rule, not all RL exploration algorithms.'],
    authors: 'Wilson, R. C., Geana, A., White, J. M., Ludvig, E. A., & Cohen, J. D.', year: '2014', journal: 'Journal of Experimental Psychology: General, 143, 2074–2081', paper: 'Humans use directed and random exploration to solve the explore–exploit dilemma', url: 'https://pubmed.ncbi.nlm.nih.gov/25347535/', evidence: ['Horizon task 实验 · 原始摘要已用 Jev 核验', 'Horizon task experiment · Original abstract checked with Jev']
  },
  {
    id: 'mechanisms', title: ['行为背后的机制', 'Competing mechanisms'], short: ['相似行为可能来自不同过程', 'Similar choices, different processes'],
    concept: ['Area 5 · 行为评估与模型解释', 'Area 5 · Behavioural evaluation and explanation'],
    zh: '我们的最后一个观点是，即使行为发生在奖励学习任务中，也不能直接认定其机制就是标准 RL。Collins 对七组数据、共 594 名参与者进行重新分析和建模，发现，在所研究的工具性学习情境中，快速工作记忆与较慢的习惯式联结过程，能更好地解释行为。这说明，原本归因于 RL 的表现，也可能来自其他过程。因此，模型需要与替代解释竞争，才能证明它解释了人类的决策机制。',
    en: 'Our final point is that behaviour in a reward-learning task need not be generated by standard RL computations. Collins reanalysed seven datasets involving 594 participants. In the instrumental-learning context studied, behaviour was best explained by a fast working-memory process combined with a slower habit-like associative process. This shows that behaviour attributed to RL may have alternative explanations. A model must compete against those alternatives before we treat it as an explanation of human decision-making.',
    opponent: ['但 RL 已经成功解释了很多行为和脑信号。', 'But RL has already explained many behaviours and brain signals.'],
    rebuttal: ['我们承认这些成功。但它们不能免除具体模型与替代机制比较的责任。你们的证据能否区分 RL、工作记忆和习惯，而不仅仅是发现相关性？', 'We acknowledge those successes. But can your evidence distinguish RL from working memory and habit, rather than simply show an association?'],
    boundary: ['结论适用于论文研究的工具性学习情境；它不证明所有奖励学习都不存在 RL 成分。2025 年在线发表，2026 年卷期出版。', 'The conclusion concerns the instrumental context studied, not all reward learning. Published online in 2025 and in the 2026 journal issue.'],
    authors: 'Collins, A. G. E.', year: '2026', journal: 'Nature Human Behaviour, 10, 357–369', paper: 'A habit and working memory model as an alternative account of human reward-based learning', url: 'https://pubmed.ncbi.nlm.nih.gov/41249816/', evidence: ['7 组数据 · 594 人 · 原始摘要已用 Jev 核验', '7 datasets · 594 participants · Original abstract checked with Jev']
  }
];
