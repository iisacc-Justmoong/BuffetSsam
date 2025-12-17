<script>
	import Panel from '$lib/components/blocks/Panel.svelte';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import Step from '$lib/components/blocks/Step.svelte';
</script>

<section class="section">
	<SectionHeader
		kicker="Process"
		title="프로세스는 4단계로 단순합니다"
		lead="불필요한 리드타임을 줄이고 실행력을 높이는 흐름을 제안합니다."
	/>
	<div class="steps">
		<Step title="상담 및 진단" text="현업 담당자 인터뷰와 데이터 분석으로 과제를 정의합니다." />
		<Step title="설계 및 제안" text="성과 지표와 커리큘럼을 설계하고 일정·예산을 제안합니다." />
		<Step title="실행 및 운영" text="교육 운영, 코칭, 학습 커뮤니티를 함께 지원합니다." />
		<Step title="효과 측정" text="성과 분석과 개선 리포트로 다음 사이클을 연결합니다." />
		<Step title="정착 지원" text="성과 공유와 후속 코칭으로 변화를 고정합니다." />
		<Step title="차기 기획" text="성과 데이터를 바탕으로 다음 단계 전략을 제안합니다." />
	</div>
</section>

<section class="section">
	<SectionHeader
		kicker="Deliverables"
		title="각 단계 산출물"
		lead="프로세스별로 결과물을 명확히 제공해 실행 품질을 높입니다."
	/>
	<div class="split">
		<Panel
			title="기획 산출물"
			text="진단에서 설계까지 필요한 문서와 기준을 제공합니다."
			items={['과제 정의서', '성과 지표 매트릭스', '일정·리소스 계획']}
		/>
		<Panel
			accent={true}
			title="운영 산출물"
			text="실행과 측정을 지원하는 운영 자료를 제공합니다."
			items={['운영 체크리스트', '참여자 안내서', '성과 리뷰 리포트']}
		/>
	</div>
</section>
