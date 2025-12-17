<script>
	import Card from '$lib/components/blocks/Card.svelte';
	import Panel from '$lib/components/blocks/Panel.svelte';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
</script>

<section class="section">
	<SectionHeader
		kicker="Programs"
		title="조직 상황에 맞춘 프로그램 라인업"
		lead="리더십부터 직무 역량, 조직문화까지 맞춤 설계를 제공합니다."
	/>
	<div class="split">
		<Panel
			title="핵심 역량 프로그램"
			text="조직 규모와 직무 특성을 반영한 집중 프로그램."
			items={['리더십·매니저 역량', '신입·전환 교육', '세일즈·고객 경험', '직무 과제 기반 프로젝트']}
		/>
		<Panel
			accent={true}
			title="운영 지원 서비스"
			text="교육 운영과 평가를 함께 설계해 실행력을 높입니다."
			items={['강사·콘텐츠 매칭', '학습 운영 대행', 'LMS·데이터 리포팅', '성과 대시보드 운영']}
		/>
	</div>
</section>

<section class="section">
	<SectionHeader
		kicker="Tracks"
		title="대표 프로그램 예시"
		lead="산업과 조직 규모에 맞춰 조합 가능한 라인업입니다."
	/>
	<div class="card-grid">
		<Card
			tag="Leadership"
			title="리더십 아카데미"
			meta="중간관리자 리더십과 코칭 역량을 강화합니다."
			items={['피드백 대화 스킬', '목표 설정 워크숍', '팀 퍼포먼스 코칭']}
		/>
		<Card
			tag="Sales"
			title="세일즈 부트캠프"
			meta="현장 적용 중심의 실습으로 성과를 높입니다."
			items={['고객 니즈 발굴', '제안서 구조화', '딜 리뷰 세션']}
		/>
		<Card
			tag="Culture"
			title="조직문화 리딩"
			meta="협업과 몰입을 높이는 팀 문화를 설계합니다."
			items={['커뮤니케이션 규칙', '리추얼 설계', '문화 지표 점검']}
		/>
	</div>
</section>
