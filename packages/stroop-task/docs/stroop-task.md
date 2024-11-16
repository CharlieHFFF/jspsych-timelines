# stroop-task

Implementing standard stroop tasks as a JsPsych Timeline

## Parameters

### Initialization Parameters

Initialization parameters can be set when calling `initJsPsych()`

```js
initJsPsych({
  timelines: [
    {type: jsPsychTimelineStroopTask, params: {...}}
  ]
})
```

Parameter | Type | Default Value | Description
----------|------|---------------|------------
          |      |               |

### Trial Parameters

Trial parameters can be set when adding the timeline to a trial object.

```js
var trial = {
  type: jsPsych...,
  timelines: [
    {type: jsPsychTimelineStroopTask, params: {...}}
  ]
}
```

Parameter | Type | Default Value | Description
----------|------|---------------|------------
          |      |               |

## Data Generated

Name | Type | Value
-----|------|------
     |      |

## Functions

If the timeline adds any static functions, list them here.

### function()

