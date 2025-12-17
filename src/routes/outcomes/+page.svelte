<script>
	import Panel from '$lib/components/blocks/Panel.svelte';
	import Quote from '$lib/components/blocks/Quote.svelte';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import Stat from '$lib/components/ui/Stat.svelte';
</script>

<section class="section">
	<SectionHeader
		kicker="Outcomes"
		title="성과를 수치로 확인합니다"
		lead="학습 전환율, 현업 적용률, 팀 성과 변화를 함께 관리합니다."
	/>
	<div class="split">
		<Panel
			title="성과 측정 지표"
			text="교육의 효과를 객관적으로 확인할 수 있는 지표를 제공합니다."
			items={['사전·사후 역량 평가', '현업 적용 과제 달성률', '참여·완주율 및 만족도', '현업 전이 인터뷰 요약']}
		/>
		<div class="stats">
			<Stat value="92%" label="완주율" />
			<Stat value="23%" label="평균 성과 향상" />
			<Stat value="4.7점" label="만족도" />
			<Stat value="38%" label="추천 의향" />
			<Stat value="12주" label="성과 추적 기간" />
		</div>
	</div>
	<div class="quote-grid">
		<Quote
			text="프로젝트 리더가 교육 이후 실제 지표 개선을 이끌어냈습니다. 실행과 측정이 동시에 진행되어 신뢰도가 높았습니다."
			meta="A기업 HRD 팀"
		/>
		<Quote
			text="진단부터 운영까지 체계적이라 내부 리소스를 크게 줄일 수 있었습니다."
			meta="B기업 인사팀"
		/>
		<Quote
			text="직무별 역량 모델링이 특히 유용했고, 교육 이후 변화가 바로 보였습니다."
			meta="C대학 산학협력단"
		/>
		<Quote
			text="성과 리포트가 명확해 경영진 설득이 쉬웠습니다."
			meta="D기업 경영기획팀"
		/>
	</div>
</section>

<section class="section">
	<SectionHeader
		kicker="Reporting"
		title="성과 리포팅 방식"
		lead="의사결정을 돕는 구조로 데이터를 정리해 제공합니다."
	/>
	<div class="split">
		<Panel
			title="데이터 대시보드"
			text="성과 데이터를 한눈에 확인할 수 있도록 시각화합니다."
			items={['핵심 지표 트래킹', '참여자 그룹 비교', '추세 분석 그래프']}
		/>
		<Panel
			accent={true}
			title="의사결정 브리핑"
			text="경영진과 실무자가 함께 볼 수 있는 요약본을 제공합니다."
			items={['성과 요약 슬라이드', '개선 포인트 정리', '다음 액션 제안']}
		/>
	</div>
</section>
