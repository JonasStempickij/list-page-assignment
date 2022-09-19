using RecordShopAPI.Models;
using RecordShopAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace RecordShopAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecordsController : ControllerBase
{
    private readonly RecordsService _recordsService;

    public RecordsController(RecordsService recordsService) =>
        _recordsService = recordsService;

    [HttpGet]
    public async Task<List<Record>> Get() =>
        await _recordsService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Record>> Get(string id)
    {
        var record = await _recordsService.GetAsync(id);

        if (record is null)
        {
            return NotFound();
        }

        return record;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Record newRecord)
    {
        await _recordsService.CreateAsync(newRecord);

        return CreatedAtAction(nameof(Get), new { id = newRecord.Id }, newRecord);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Record updatedRecord)
    {
        var record = await _recordsService.GetAsync(id);

        if (record is null)
        {
            return NotFound();
        }

        updatedRecord.Id = record.Id;

        await _recordsService.UpdateAsync(id, updatedRecord);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var record = await _recordsService.GetAsync(id);

        if (record is null)
        {
            return NotFound();
        }

        await _recordsService.RemoveAsync(id);

        return NoContent();
    }
}