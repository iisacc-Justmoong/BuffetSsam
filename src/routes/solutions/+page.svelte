<script>
	import Card from '$lib/components/blocks/Card.svelte';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
</script>

<section class="section">
	<SectionHeader
		kicker="Solutions"
		title="성과 중심 교육컨설팅"
		lead="조직의 목표를 학습 목표로 전환해 실제 성과로 이어지는 교육 체계를 만듭니다."
	/>
	<div class="card-grid">
		<Card
			tag="Diagnose"
			title="교육 니즈 진단"
			meta="전략과 직무 데이터를 연결해 핵심 과제를 정의합니다."
			items={[
				'전략·직무별 역량 갭 분석',
				'인터뷰·설문 기반 진단',
				'우선순위 로드맵 설계',
				'이해관계자 워크숍 진행'
			]}
		/>
		<Card
			tag="Design"
			title="러닝 경험 설계"
			meta="학습 여정을 설계해 몰입과 전이를 높입니다."
			items={[
				'성과 목표 및 평가 기준',
				'블렌디드 커리큘럼',
				'학습 여정 맵 구성',
				'온·오프 믹스 설계'
			]}
		/>
		<Card
			tag="Impact"
			title="성과 정착"
			meta="현업 적용까지 이어지는 운영 체계를 구축합니다."
			items={['현업 적용 프로젝트', '코칭·피드백 체계', '성과 리포트 제공', '성과 공유 세션 운영']}
		/>
	</div>
</section>

<section class="section">
	<SectionHeader
		kicker="Deliverables"
		title="솔루션 결과물"
		lead="진단부터 실행까지 필요한 결과물을 표준화해 제공합니다."
	/>
	<div class="card-grid">
		<Card
			tag="Roadmap"
			title="로드맵 문서"
			meta="우선순위와 일정 기준을 명확히 정리합니다."
			items={['핵심 과제 정의', '리소스 추정', '성과 목표 정렬']}
		/>
		<Card
			tag="Toolkit"
			title="운영 툴킷"
			meta="현장 운영에 필요한 템플릿을 제공합니다."
			items={['운영 체크리스트', '참여 공지 템플릿', '피드백 수집 양식']}
		/>
		<Card
			tag="Report"
			title="성과 리포트"
			meta="측정 결과를 이해관계자와 공유합니다."
			items={['성과 요약', '개선 포인트', '다음 단계 제안']}
		/>
	</div>
</section>
