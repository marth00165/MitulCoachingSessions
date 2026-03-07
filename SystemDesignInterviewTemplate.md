# 🖥️ Systems Design Interview Cheat Sheet
> Hello Interview Approach

---

## 1. 📋 Requirements (3-5 min)

### Functional
- [ ] What are the core features? (pick 2-3)
- [ ] Clarify what's in/out of scope

### Non-Functional
- [ ] Scale (DAU, QPS)
- [ ] Latency requirements
- [ ] Consistency vs Availability (CAP)
- [ ] Read heavy vs Write heavy?

---

## 2. 📐 Capacity Estimation (2-3 min)
- [ ] **Users:** DAU → QPS
- [ ] **Storage:** Data size × users × time
- [ ] **Bandwidth:** Read/Write throughput

---

## 3. 🏗️ Core Entities & API Design (3-5 min)
- [ ] Define main entities/data models
- [ ] Define key API endpoints (REST/GraphQL)

---

## 4. 🖼️ High Level Design (10-15 min)
- [ ] Draw the happy path end to end
- [ ] Client → API Gateway → Services → DB → Cache

---

## 5. 🔍 Deep Dives (10-15 min)
- [ ] Scaling bottlenecks
- [ ] Caching strategy
- [ ] Database choice & indexing
- [ ] Failure handling / fault tolerance
- [ ] Follow interviewer's lead

---

## ⚡ Golden Rules
- ✅ Talk out loud always
- ✅ Drive the conversation
- ✅ Justify every decision
- ✅ Ask before going deep
- ❌ Don't silently draw/write
- ❌ Don't over-engineer early

---

## 🗣️ Useful Phrases
- *"Before I dive in, let me clarify a few things..."*
- *"I'll focus on X, Y, Z as core features"*
- *"The bottleneck here would be..."*
- *"I'd choose X over Y because..."*
- *"Should I go deeper on any specific area?"*
