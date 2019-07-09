# SortableWithTies

## Objective
A simple plugin to create a list that is sortable with ties.

## How to use it
Follow the formats:
```HTML
<!-- tier1 -->
<div class="div-container">
    <div>
        <ul class="ul-list">
            <span class="tier"> 1 </span>  <!-- tier handle -->
            <li class="list-element">a</li>
            <li class="list-element">b</li>
        </ul>
    </div>

    <!-- tier2 -->
    <div>
        <ul class="ul-list">
            <span class="tier"> 2 </span>  <!-- tier handle -->
            <li class="list-element">c</li>
            <li class="list-element">d</li>
        </ul>
    </div>
</div>
```
And include the JS files:
```HTML
<script src="../assets/js/jquery-2.2.4.min.js"></script>
<script src="../assets/js/jquery-ui.min.js"></script>
<script src="../assets/js/voting.js"></script>
```

## Future Update
Right now the plugin only supports specific format to sort. A variety of formats will be supported in the future
