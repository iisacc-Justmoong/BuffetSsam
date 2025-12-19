<script>
	import { createEventDispatcher } from 'svelte';
	import Badge from '../ui/Badge.svelte';

	export let kicker = 'Demo';
	export let title = '맞춤 데모 요청';
	export let lead =
		'조직의 현재 상황과 목표를 알려주시면 가장 알맞은 교육 프로그램과 샘플 커리큘럼을 제안드립니다.';
	export let checklist = [
		'목표와 팀 규모를 간단히 적어주세요',
		'희망 일정과 예산 범위를 알려주세요',
		'필요한 형식 (온·오프라인/블렌디드) 선택'
	];
	export let highlights = [
		{ label: '응답 속도', value: '24시간 이내', hint: '실무 컨설턴트가 직접 연락' },
		{ label: '제공 자료', value: '샘플 커리큘럼', hint: '성과 지표 초안 포함' }
	];
	export let submitLabel = '맞춤 제안 받기';

	const dispatch = createEventDispatcher();

	let name = '';
	let company = '';
	let email = '';
	let topic = '';
	let detail = '';

	const handleSubmit = () => {
		dispatch('submit', { name, company, email, topic, detail });
	};
</script>

<section class="demo-form">
	<div class="demo-form__summary">
		<Badge class="demo-form__badge">{kicker}</Badge>
		<div class="demo-form__titles">
			<h3 class="demo-form__title">{title}</h3>
			<p class="demo-form__lead">{lead}</p>
		</div>
		{#if checklist.length}
			<div class="demo-form__chips">
				{#each checklist as item}
					<span class="demo-form__chip">{item}</span>
				{/each}
			</div>
		{/if}
		{#if highlights.length}
			<div class="demo-form__highlights">
				{#each highlights as item}
					<div class="demo-form__highlight">
						<p class="demo-form__highlight-label">{item.label}</p>
						<p class="demo-form__highlight-value">{item.value}</p>
						{#if item.hint}
							<p class="demo-form__highlight-hint">{item.hint}</p>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
		<div class="demo-form__note">
			<span class="demo-form__pulse" aria-hidden="true"></span>
			<p>24시간 내 결과 요약과 상담 일정을 함께 드립니다.</p>
		</div>
	</div>

	<form class="demo-form__card" on:submit|preventDefault={handleSubmit}>
		<div class="demo-form__header">
			<p class="demo-form__eyebrow">프로젝트 브리핑</p>
			<p class="demo-form__meta">입력 5줄로 핵심 니즈를 파악하고 샘플 커리큘럼을 제안합니다.</p>
		</div>
		<div class="demo-form__grid">
			<label class="demo-form__field">
				<span>성함</span>
				<input name="name" type="text" placeholder="예: 홍길동" bind:value={name} required />
			</label>
			<label class="demo-form__field">
				<span>최종 학력</span>
				<input name="company" type="text" placeholder="예: 2년제 전문대졸" bind:value={company} required />
			</label>
			<label class="demo-form__field">
				<span>전화번호</span>
				<input name="email" type="text" placeholder="01012345678" />
			</label>
			<label class="demo-form__field">
				<span>상담희망시간</span>
				<input
					name="topic"
					type="text"
					placeholder="예: 내일 오후 4시"
					bind:value={topic}
					required
				/>
			</label>
			<label class="demo-form__field demo-form__field--full">
				<span>상담내용</span>
				<textarea
					name="detail"
					rows="3"
					placeholder="예: 간호학과에 편입하고 싶어요."
					bind:value={detail}
				></textarea>
			</label>
		</div>
		<div class="demo-form__footer">
			<div class="demo-form__assurance">
				<span class="demo-form__badge-dot" aria-hidden="true"></span>
				<p>정보는 암호화되어 전달되며, 목적 외 사용하지 않습니다.</p>
			</div>
			<button class="button demo-form__submit" type="submit">{submitLabel}</button>
		</div>
	</form>
</section>

<style>
	.demo-form {
		display: grid;
		gap: 18px;
		grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
		align-items: stretch;
		padding: clamp(18px, 3vw, 26px);
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border-strong);
		background:
			radial-gradient(420px 200px at 16% 0%, rgba(0, 122, 255, 0.14), transparent 60%),
			radial-gradient(420px 200px at 88% 0%, rgba(19, 255, 214, 0.12), transparent 60%),
			var(--color-background-secondary);
		box-shadow: 0 18px 38px var(--color-shadow);
	}

	.demo-form__summary {
		padding: clamp(14px, 2vw, 18px);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.04));
		display: grid;
		gap: 12px;
		align-content: start;
	}

	

	.demo-form__titles {
		display: grid;
		gap: 8px;
	}

	.demo-form__title {
		margin: 0;
		font-size: clamp(24px, 3.4vw, 30px);
		line-height: 1.26;
	}

	.demo-form__lead {
		margin: 0;
		color: var(--color-text-secondary);
	}

	.demo-form__chips {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.demo-form__chip {
		padding: 6px 10px;
		border-radius: 999px;
		border: 1px solid var(--color-border);
		background: rgba(255, 255, 255, 0.05);
		color: var(--color-text-secondary);
		font-size: 13px;
	}

	.demo-form__highlights {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	}

	.demo-form__highlight {
		padding: 12px;
		border-radius: var(--radius-sm);
		border: 1px solid var(--color-border);
		background: var(--color-surface);
	}

	.demo-form__highlight-label {
		margin: 0;
		color: var(--color-text-secondary);
		font-size: 12px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.demo-form__highlight-value {
		margin: 4px 0 0;
		font-weight: 600;
		font-size: 18px;
	}

	.demo-form__highlight-hint {
		margin: 4px 0 0;
		color: var(--color-text-secondary);
		font-size: var(--text-caption);
	}

	.demo-form__note {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 10px 12px;
		border-radius: 12px;
		border: 1px dashed var(--color-border);
		color: var(--color-text-secondary);
		font-size: var(--text-caption);
		background: rgba(255, 255, 255, 0.02);
	}

	.demo-form__pulse {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--color-accent-cyan);
		box-shadow: 0 0 0 6px rgba(19, 255, 214, 0.1);
	}

	.demo-form__card {
		position: relative;
		display: grid;
		gap: 14px;
		padding: clamp(18px, 3vw, 22px);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border-strong);
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0)),
			var(--color-surface);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
		overflow: hidden;
	}

	.demo-form__card::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(280px 120px at 80% 0%, rgba(0, 122, 255, 0.16), transparent 60%);
		pointer-events: none;
	}

	.demo-form__header {
		display: grid;
		gap: 6px;
		padding-bottom: 10px;
		border-bottom: 1px solid var(--color-border);
	}

	.demo-form__eyebrow {
		margin: 0;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--color-text-secondary);
	}

	.demo-form__meta {
		margin: 0;
		color: var(--color-text-secondary);
	}

	.demo-form__grid {
		display: grid;
		gap: 12px;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	}

	.demo-form__field {
		display: grid;
		gap: 6px;
	}

	.demo-form__field span {
		font-size: 13px;
		color: var(--color-text-secondary);
	}

	.demo-form__field input,
	.demo-form__field textarea {
		width: 100%;
		padding: 12px 14px;
		border-radius: 12px;
		border: 1px solid var(--color-border-strong);
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
		font: inherit;
		transition: border-color 120ms ease, box-shadow 120ms ease, transform 120ms ease;
	}

	.demo-form__field input:focus,
	.demo-form__field textarea:focus {
		outline: none;
		border-color: var(--color-accent-blue);
		box-shadow: 0 0 0 1px var(--color-accent-blue);
		transform: translateY(-1px);
	}

	.demo-form__field textarea {
		resize: vertical;
		min-height: 110px;
	}

	.demo-form__field--full {
		grid-column: 1 / -1;
	}

	.demo-form__footer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px;
		padding-top: 12px;
		border-top: 1px solid var(--color-border);
	}

	.demo-form__assurance {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: var(--color-text-secondary);
		font-size: var(--text-caption);
	}

	.demo-form__badge-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-cyan));
	}

	.demo-form__submit {
		margin-left: auto;
	}

	@media (max-width: 900px) {
		.demo-form {
			grid-template-columns: 1fr;
			padding: 18px;
		}

		.demo-form__footer {
			align-items: stretch;
		}

		.demo-form__submit {
			width: 100%;
			justify-content: center;
		}
	}
</style>
