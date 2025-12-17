<script>
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Panel from '$lib/components/blocks/Panel.svelte';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
</script>

<section class="cta">
	<Badge>Contact</Badge>
	<h2 class="cta__title">무료 진단으로 교육 성과를 시작하세요</h2>
	<p class="cta__lead">
		프로젝트 조건을 공유해 주시면 일주일 내 진단 결과와 맞춤 제안을 드립니다.
	</p>
	<div class="cta__actions">
		<Button href="mailto:hello@edubridge.co.kr">상담 요청</Button>
		<Button variant="ghost" href="/programs">소개서 요청</Button>
	</div>
	<div class="cta__meta">
		<span>전화 02-000-0000</span>
		<span>이메일 hello@edubridge.co.kr</span>
		<span>서울 강남구 테헤란로 123</span>
	</div>
</section>

<section class="section">
	<SectionHeader
		kicker="Guide"
		title="상담 준비 체크리스트"
		lead="상담 품질을 높이기 위해 간단한 정보를 준비해 주세요."
	/>
	<div class="split">
		<Panel
			title="사전 준비"
			text="현재 교육 현황과 기대 성과를 정리해 주세요."
			items={['현재 진행 중인 프로그램 목록', '성과 목표 및 KPI', '대상자 규모와 직무']}
		/>
		<Panel
			accent={true}
			title="기본 정보"
			text="일정과 예산 범위를 공유해 주시면 빠르게 제안할 수 있습니다."
			items={['희망 일정과 기간', '예산 범위', '의사결정 담당자 정보']}
		/>
	</div>
</section>
