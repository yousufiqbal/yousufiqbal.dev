<div class="card">
    <slot></slot>
</div>

<style>
    .card {
        padding: 30px;
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        background-color: var(--bg);
        /* border-left: 2px solid var(--primary); */
        border-bottom: 2px solid var(--primary);
    }
</style>